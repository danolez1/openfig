from array import array
from functools import lru_cache
import math


def _cubic(distance, b, c):
    x = abs(distance)
    if x < 1:
        return ((12 - 9*b - 6*c)*x**3 + (-18 + 12*b + 6*c)*x**2 + 6 - 2*b) / 6
    if x < 2:
        return ((-b - 6*c)*x**3 + (6*b + 30*c)*x**2 + (-12*b - 48*c)*x + 8*b + 24*c) / 6
    return 0.0


def _kernel(name):
    if name == 'nearest':
        return .5, lambda x: 1.0 if -.5 < x <= .5 else 0.0
    if name == 'bilinear':
        return 1.0, lambda x: max(0.0, 1.0 - abs(x))
    if name == 'mitchell':
        return 2.0, lambda x: _cubic(x, 1/3, 1/3)
    if name == 'catmull-rom':
        return 2.0, lambda x: _cubic(x, 0.0, .5)
    if name == 'lanczos3':
        def lanczos(x):
            if x == 0:
                return 1.0
            return math.sin(math.pi*x) * math.sin(math.pi*x/3) / (math.pi**2*x*x/3) if abs(x) < 3 else 0.0
        return 3.0, lanczos
    raise ValueError('Unsupported image sampling kernel: ' + str(name))


def _weights(count, scale, offset, source_count, kernel, antialias, edge, phase_bits):
    support, function = _kernel(kernel)
    footprint = max(1.0, abs(scale)) if antialias else 1.0
    table = []
    for destination in range(count):
        center = (destination + .5) * scale + offset - .5
        if phase_bits is not None:
            factor = 2**phase_bits
            center = math.floor(center * factor + .5) / factor
        samples = {}
        for source in range(math.ceil(center - support*footprint), math.floor(center + support*footprint) + 1):
            weight = function((source-center) / footprint)
            if weight == 0:
                continue
            index = source
            if not 0 <= source < source_count:
                if edge == 'clamp':
                    index = min(source_count - 1, max(0, source))
                elif edge == 'repeat':
                    index = source % source_count
                else:
                    index = None
            samples[index] = samples.get(index, 0.0) + weight
        total = sum(samples.values())
        if not samples or total == 0:
            raise ValueError('Image sampling weights have zero support')
        table.append(tuple((index, weight/total) for index, weight in samples.items()))
    return table


def _quantize(value, rounding):
    value = min(1.0, max(0.0, value)) * 255
    if rounding == 'nearest':
        return math.floor(value + .5)
    if rounding == 'floor':
        return math.floor(value)
    return math.ceil(value)


def sample_rgba(image, size, transform, *, kernel='bilinear', antialias=False,
                premultiplied_alpha=True, color_space='encoded', intermediate='float64',
                rounding='nearest', edge='clamp', phase_bits=None):
    from PIL import Image, ImageChops

    if len(size) != 2 or any(isinstance(v, bool) or not isinstance(v, int) or v <= 0 for v in size):
        raise ValueError('Image sampling dimensions must be positive integers')
    if len(transform) != 6 or not all(math.isfinite(v) for v in transform):
        raise ValueError('Image sampling transform must contain six finite values')
    a, b, c, d, tx, ty = transform
    if b != 0 or c != 0:
        raise NotImplementedError('This sampler requires an axis-aligned source transform')
    if a == 0 or d == 0:
        raise ValueError('Image sampling transform must be invertible')
    if color_space not in ('encoded', 'linear22') or intermediate not in ('float64', 'float32', 'rgba8'):
        raise ValueError('Unsupported image sampling color precision')
    if rounding not in ('nearest', 'floor', 'ceil') or edge not in ('clamp', 'repeat', 'transparent'):
        raise ValueError('Unsupported image sampling boundary or rounding mode')
    if phase_bits is not None and (isinstance(phase_bits, bool) or not isinstance(phase_bits, int) or not 0 <= phase_bits <= 24):
        raise ValueError('Image sampling phase precision must be an integer from 0 to 24')
    if getattr(image, 'is_animated', False):
        raise ValueError('Image sampling requires an explicit animation frame')
    source = image.convert('RGBA')
    width, height = size
    source_width, source_height = source.size
    columns = _weights(width, a, tx, source_width, kernel, antialias, edge, phase_bits)
    rows = _weights(height, d, ty, source_height, kernel, antialias, edge, phase_bits)
    inside = all(index is not None for weights in columns + rows for index, _ in weights)
    opaque = source.getchannel('A').getextrema() == (255, 255) and inside
    red, green, blue, _ = source.split()
    gray = opaque and ImageChops.difference(red, green).getbbox() is None and ImageChops.difference(red, blue).getbbox() is None
    channels = 1 if gray else 3 if opaque else 4
    data = memoryview(source.tobytes())
    array_type = 'f' if intermediate == 'float32' else 'd'

    @lru_cache(maxsize=128)
    def horizontal(source_y):
        if source_y is None:
            return tuple(array(array_type, [0.0]) * width for _ in range(channels))
        decoded = [array('d') for _ in range(channels)]
        start = source_y * source_width * 4
        for source_x in range(source_width):
            position = start + source_x*4
            alpha = data[position+3] / 255.0
            for channel in range(channels):
                value = data[position+channel] / 255.0
                if channel < 3:
                    if color_space == 'linear22':
                        value **= 2.2
                    if premultiplied_alpha and not opaque:
                        value *= alpha
                decoded[channel].append(value)
        output = []
        for plane in decoded:
            values = array(array_type)
            for weights in columns:
                value = sum(plane[index]*weight for index, weight in weights if index is not None)
                values.append(_quantize(value, rounding)/255.0 if intermediate == 'rgba8' else value)
            output.append(values)
        return tuple(output)

    # A bounded row cache avoids retaining float copies of large source images.
    output = bytearray(width * height * 4)
    for y, weights in enumerate(rows):
        sampled_rows = [(horizontal(index), weight) for index, weight in weights]
        for x in range(width):
            values = [sum(planes[channel][x]*weight for planes, weight in sampled_rows) for channel in range(channels)]
            alpha = min(1.0, max(0.0, values[3])) if channels == 4 else 1.0
            colors = values[:3] if channels > 1 else values*3
            if premultiplied_alpha and not opaque:
                colors = [value/alpha if alpha > 0 else 0.0 for value in colors]
            if color_space == 'linear22':
                colors = [max(0.0, value)**(1/2.2) for value in colors]
            position = (y*width+x)*4
            output[position:position+4] = bytes([_quantize(value, rounding) for value in colors] + [_quantize(alpha, rounding)])
    horizontal.cache_clear()
    return Image.frombytes('RGBA', size, bytes(output))
