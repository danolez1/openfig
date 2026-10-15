import hashlib
import io
import json

FILTER_VERSION = 'linear-lab-exposure-v1'
FILTER_FIELDS = ('tint', 'shadows', 'highlights', 'exposure', 'temperature', 'vibrance', 'contrast')


def image_filter_key(source_hash, settings):
    values = {field: float((settings or {}).get(field, 0) or 0) for field in FILTER_FIELDS}
    if not any(values.values()):
        return None
    payload = json.dumps([FILTER_VERSION, source_hash, values], sort_keys=True, separators=(',', ':'))
    return hashlib.sha256(payload.encode()).hexdigest()


def filter_image_bytes(content, settings):
    try:
        from PIL import Image, ImageMath, PngImagePlugin
    except ImportError as error:
        raise RuntimeError('Image adjustments require Pillow. Run python3 -m pip install -r requirements.txt.') from error

    def operation(expression, **planes):
        return ImageMath.lambda_eval(expression, **planes)

    def clamp(channel):
        return operation(lambda p: p['min'](p['max'](p['x'], 0.0), 1.0), x=channel)

    def luminance(channels):
        return operation(lambda p: .2126 * p['r'] + .7152 * p['g'] + .0722 * p['b'],
                         r=channels[0], g=channels[1], b=channels[2])

    exposure = float(settings.get('exposure', 0) or 0)
    contrast = float(settings.get('contrast', 0) or 0)
    saturation = float(settings.get('vibrance', 0) or 0)
    temperature = float(settings.get('temperature', 0) or 0)
    tint = float(settings.get('tint', 0) or 0)
    shadows = float(settings.get('shadows', 0) or 0)
    highlights = float(settings.get('highlights', 0) or 0)

    def adjust_tile(tile):
        red, green, blue, alpha = tile.split()
        channels = [operation(lambda p: (p['x'] / 255.0) ** 2.2, x=channel.convert('F'))
                    for channel in (red, green, blue)]
        shadow_luminance = luminance(channels) if shadows or highlights else None
        if contrast or temperature or tint:
            red, green, blue = channels
            x = operation(lambda p: (.4124564 * p['r'] + .3575761 * p['g'] + .1804375 * p['b']) / .95047,
                          r=red, g=green, b=blue)
            y = operation(lambda p: .2126729 * p['r'] + .7151522 * p['g'] + .072175 * p['b'],
                          r=red, g=green, b=blue)
            z = operation(lambda p: (.0193339 * p['r'] + .119192 * p['g'] + .9503041 * p['b']) / 1.08883,
                          r=red, g=green, b=blue)
            x, y, z = [operation(lambda p: p['x'] ** (1.0 / 3.0), x=channel) for channel in (x, y, z)]
            lightness = operation(lambda p: 116 * p['y'] - 16, y=y)
            if contrast <= 0:
                adjusted = operation(lambda p: p['L'] * (1 + .8 * contrast) - 40 * contrast, L=lightness)
            else:
                position = operation(lambda p: p['min'](p['max']((p['L'] - 20) / 60, 0.0), 1.0), L=lightness)
                smooth = operation(lambda p: p['t'] ** 3 * (p['t'] * (p['t'] * 6 - 15) + 10), t=position)
                adjusted = operation(lambda p: p['L'] * (1 - contrast) + p['s'] * 100 * contrast,
                                     L=lightness, s=smooth)
            delta = operation(lambda p: (p['adjusted'] - p['L']) / 116, adjusted=adjusted, L=lightness)
            x = operation(lambda p: (p['x'] + p['d'] + .06 * tint) ** 3 * .95047, x=x, d=delta)
            y = operation(lambda p: (p['y'] + p['d']) ** 3, y=y, d=delta)
            z = operation(lambda p: (p['z'] + p['d'] - .15 * temperature) ** 3 * 1.08883, z=z, d=delta)
            channels = [
                clamp(operation(lambda p: 3.2404542 * p['x'] - 1.5371385 * p['y'] - .4985314 * p['z'], x=x, y=y, z=z)),
                clamp(operation(lambda p: -.969266 * p['x'] + 1.8760108 * p['y'] + .041556 * p['z'], x=x, y=y, z=z)),
                clamp(operation(lambda p: .0556434 * p['x'] - .2040259 * p['y'] + 1.0572252 * p['z'], x=x, y=y, z=z)),
            ]
        base_luminance = luminance(channels)
        if shadows or highlights:
            distance = operation(lambda p: p['Y'] - .5 ** 2.2, Y=shadow_luminance)
            offset = operation(lambda p: .75 * p['d'] / (1 + 4 * p['d'] ** 2) ** .5
                               * ((p['d'] > 0) * highlights + (p['d'] <= 0) * -shadows * .999), d=distance)
            local_exposure = operation(lambda p: p['offset'] + exposure, offset=offset)
        else:
            local_exposure = Image.new('F', tile.size, exposure)
        if exposure or shadows or highlights:
            negative = operation(lambda p: p['min'](p['e'], 0.0), e=local_exposure)
            chroma = operation(lambda p: 3 * (1 + p['Y'] ** 2 * p['e'] / (.2 - p['e'])),
                               Y=base_luminance, e=negative)
            gain = operation(lambda p: 10 ** (2 * p['e']), e=local_exposure)
            base = operation(lambda p: p['Y'] * (1 + p['e'] / 16), Y=base_luminance, e=negative)
            mixed = [operation(lambda p: (.25 * p['c'] + .75 * p['Y']) * (1 + p['e'] / 16),
                               c=channel, Y=base_luminance, e=negative) for channel in channels]
            base = operation(lambda p: p['Y'] * p['g'] / (p['Y'] * (p['g'] - 1) + 1), Y=base, g=gain)
            toned = [operation(lambda p: p['c'] * p['g'] / (p['c'] * (p['g'] - 1) + 1), c=channel, g=gain)
                     for channel in mixed]
            channels = [clamp(operation(lambda p: p['c'] + (p['c'] - p['Y']) * p['k'], c=channel, Y=base, k=chroma))
                        for channel in toned]
        if saturation:
            base = luminance(channels)
            if saturation <= 0:
                channels = [operation(lambda p: p['Y'] * -saturation + p['c'] * (1 + saturation), Y=base, c=channel)
                            for channel in channels]
            else:
                red, green, blue = channels
                low = operation(lambda p: p['min'](p['min'](p['r'], p['g']), p['b']), r=red, g=green, b=blue)
                high = operation(lambda p: p['max'](p['max'](p['r'], p['g']), p['b']), r=red, g=green, b=blue)
                factor = operation(lambda p: p['min'](1 - saturation + saturation
                                   * p['min'](p['Y'] / (p['Y'] - p['lo'] + .000001),
                                              (1 - p['Y']) / (p['hi'] - p['Y'] + .000001)), 2.0), Y=base, lo=low, hi=high)
                channels = [operation(lambda p: p['Y'] + (p['c'] - p['Y']) * p['factor'],
                                      Y=base, c=channel, factor=factor) for channel in channels]
        encoded = [operation(lambda p: p['x'] ** (1.0 / 2.2) * 255 + .5, x=clamp(channel)).convert('L')
                   for channel in channels]
        return Image.merge('RGBA', (*encoded, alpha))

    with Image.open(io.BytesIO(content)) as source:
        # Keeping the original asset preserves browser animation timing and frame disposal.
        if getattr(source, 'is_animated', False):
            return None
        rgba = source.convert('RGBA')
    output = Image.new('RGBA', rgba.size)
    # Tiles bound float-plane memory independently of the source image height.
    tile_height = max(1, min(256, 1_000_000 // max(1, rgba.width)))
    for top in range(0, rgba.height, tile_height):
        box = (0, top, rgba.width, min(rgba.height, top + tile_height))
        output.paste(adjust_tile(rgba.crop(box)), box)
    encoded = io.BytesIO()
    metadata = PngImagePlugin.PngInfo()
    metadata.add(b'sRGB', b'\x00')
    output.save(encoded, format='PNG', pnginfo=metadata)
    return encoded.getvalue()
