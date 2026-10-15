import argparse
import base64
import gzip
import html as html_lib
import json
import mimetypes
import os
import re
import struct
import sys
import xml.etree.ElementTree as ET
from pathlib import Path
sys.dont_write_bytecode = True
from variable_colors import ColorVariables
from image_filters import filter_image_bytes, image_filter_key

parser = argparse.ArgumentParser()
parser.add_argument('--bundle', type=Path, required=True)
parser.add_argument('--flattened', type=Path, required=True)
parser.add_argument('--output', type=Path, required=True)
parser.add_argument('--font-css', type=Path)
parser.add_argument('--source-name', default='design.fig')
args = parser.parse_args()
BUNDLE = args.bundle.resolve()
SOURCE = BUNDLE / 'document.agent.json'
RAW_SOURCE = BUNDLE / 'document.raw.json'
FLATTENED_SOURCE = args.flattened.resolve()
GLYPH_PATH_SOURCE = BUNDLE / 'glyph-paths.json'
COMMAND_PATH_SOURCE = BUNDLE / 'command-paths.json'
ASSETS = BUNDLE / 'assets'
OUTPUT = args.output.resolve()
FONT_DATA = {}
FONT_FACE_CSS = args.font_css.read_text() if args.font_css and args.font_css.exists() else ''
raw = json.loads(SOURCE.read_text())
all_nodes = raw['nodesById']
raw_nodes = {}
for item in json.loads(RAW_SOURCE.read_text())['document']['nodeChanges']:
    guid = item.get('guid') or {}
    raw_nodes[f"{guid.get('sessionID')}:{guid.get('localID')}"] = item
color_variables = ColorVariables(raw_nodes)
glyph_paths = json.loads(GLYPH_PATH_SOURCE.read_text()) if GLYPH_PATH_SOURCE.exists() else {}
command_paths = json.loads(COMMAND_PATH_SOURCE.read_text()) if COMMAND_PATH_SOURCE.exists() else {}
document = all_nodes[raw['rootIds'][0]]

page_specs = []
frame_like = {'FRAME', 'COMPONENT', 'COMPONENT_SET', 'INSTANCE', 'SYMBOL'}
non_visual = {'VARIABLE', 'VARIABLE_SET', 'CANVAS'}
MIN_SCREEN_WIDTH = int(os.environ.get('OPENFIG_MIN_SCREEN_WIDTH', '280'))
MIN_SCREEN_HEIGHT = int(os.environ.get('OPENFIG_MIN_SCREEN_HEIGHT', '260'))
if MIN_SCREEN_WIDTH < 0 or MIN_SCREEN_HEIGHT < 0:
    raise ValueError('OPENFIG_MIN_SCREEN_WIDTH and OPENFIG_MIN_SCREEN_HEIGHT must be non-negative integers.')

for page_id in document['childIds']:
    page = all_nodes[page_id]
    if page['type'] != 'CANVAS':
        continue
    direct = [all_nodes[node_id] for node_id in page.get('childIds', [])]
    sections = [node for node in direct if node['type'] == 'SECTION']
    section_children = [
        all_nodes[node_id]
        for section in sections
        for node_id in section.get('childIds', [])
        if node_id in all_nodes
    ]
    candidates = section_children + [node for node in direct if node['type'] != 'SECTION']
    candidates = [node for node in candidates if node['type'] not in non_visual]
    visible = [node for node in candidates if node.get('visible', True)]
    if page.get('visible', True) is False:
        roots = visible
        layers = candidates
    else:
        screen_sized_frames = [
            node for node in visible
            if node['type'] in frame_like
            and node.get('bounds', {}).get('x', 0) > 0
            and node.get('bounds', {}).get('y', 0) > 0
            and node.get('bounds', {}).get('x', 0) >= MIN_SCREEN_WIDTH
            and node.get('bounds', {}).get('y', 0) >= MIN_SCREEN_HEIGHT
        ]
        roots = screen_sized_frames or visible
        layers = candidates
    if roots:
        page_specs.append({
            'id': page_id,
            'name': page['name'],
            'sourceVisible': page.get('visible', True),
            'boardRoots': [node['id'] for node in roots],
            'layerRoots': [node['id'] for node in layers],
        })

included = set()
for spec in page_specs:
    for root_id in spec['layerRoots']:
        stack = [root_id]
        while stack:
            node_id = stack.pop()
            if node_id in included or node_id not in all_nodes:
                continue
            included.add(node_id)
            stack.extend(all_nodes[node_id].get('childIds', []))

images_index = {item['hash']: item for item in json.loads((ASSETS / 'images.json').read_text())['images']}
image_hashes = set()
vector_refs = set()
nodes = {}


def color_data(value):
    if not isinstance(value, dict):
        return None
    return [float(value.get('r', 0)), float(value.get('g', 0)), float(value.get('b', 0)), float(value.get('a', 1))]


def matrix_data(value):
    value = value or {}
    return [float(value.get('m00', 1)), float(value.get('m10', 0)), float(value.get('m01', 0)), float(value.get('m11', 1)), float(value.get('m02', 0)), float(value.get('m12', 0))]


def flattened_matrix_data(value):
    if not value or len(value) != 2 or any(len(row) != 3 for row in value):
        return [1, 0, 0, 1, 0, 0]
    return [float(value[0][0]), float(value[1][0]), float(value[0][1]), float(value[1][1]), float(value[0][2]), float(value[1][2])]


def relative_geometry_transform(geometry_transform, flat_id, host_id, geometry_size):
    if not geometry_transform:
        return geometry_transform
    target_matrix = [1, 0, 0, 1, 0, 0]
    cursor = flat_id
    while cursor != host_id:
        flat_node = flat_nodes.get(cursor)
        if not flat_node:
            return geometry_transform
        target_matrix = multiply_matrices(flattened_matrix_data(flat_node.get('relativeTransform')), target_matrix)
        cursor = flat_node.get('parentId')
        if not cursor:
            return geometry_transform
    host_source_id = host_id.rsplit('::', 1)[-1]
    host_source_size = raw_nodes.get(host_source_id, {}).get('size') or {}
    host_size = flat_nodes.get(host_id, {}).get('size') or {}
    sx = float(host_size.get('x', 0)) / max(float(host_source_size.get('x', 0)), 1e-9)
    sy = float(host_size.get('y', 0)) / max(float(host_source_size.get('y', 0)), 1e-9)
    geometry_matrix = multiply_matrices([sx, 0, 0, sy, 0, 0], geometry_transform)
    a, b, c, d, e, f = target_matrix
    determinant = a * d - b * c
    if abs(determinant) < 1e-9:
        return geometry_matrix
    inverse = [d / determinant, -b / determinant, -c / determinant, a / determinant, (c * f - d * e) / determinant, (b * e - a * f) / determinant]
    target_size = flat_nodes.get(flat_id, {}).get('size') or {}
    target_width = float(target_size.get('x', 0))
    target_height = float(target_size.get('y', 0))
    source_width = float(geometry_size[0]) or target_width or 1
    source_height = float(geometry_size[1]) or target_height or 1
    sx = target_width / source_width
    sy = target_height / source_height
    geometry_scale_inverse = [1 / sx if sx else 1, 0, 0, 1 / sy if sy else 1, 0, 0]
    relative = multiply_matrices(multiply_matrices(inverse, geometry_matrix), geometry_scale_inverse)
    return None if all(abs(relative[index] - value) <= 1e-4 for index, value in enumerate((1, 0, 0, 1, 0, 0))) else relative


def guid_id(value):
    if not isinstance(value, dict) or 'sessionID' not in value or 'localID' not in value:
        return None
    return f"{value['sessionID']}:{value['localID']}"


def paint_override_data(paints):
    return [{'type': paint.get('type', ''), 'visible': paint.get('visible', True), 'opacity': float(paint.get('opacity', 1)), 'blendMode': paint.get('blendMode', 'NORMAL'), 'color': color_data(paint.get('color')), 'colorVariable': color_variables.binding(paint.get('colorVar')), 'paintFilter': paint_filter_data(paint.get('paintFilter'))} for paint in paints or []]


def paint_filter_data(value):
    if not isinstance(value, dict):
        return None
    keys = ('tint', 'shadows', 'highlights', 'exposure', 'temperature', 'vibrance', 'contrast')
    return {key: float(value.get(key, 0) or 0) for key in keys}


def emoji_glyph_bounds(path_id):
    path = glyph_paths.get(str(path_id), '')
    if not path or re.search(r'[^MLZ0-9eE+.,\s-]', path):
        return None
    values = [float(value) for value in re.findall(r'[-+]?(?:\d*\.\d+|\d+\.?\d*)(?:[eE][-+]?\d+)?', path)]
    if len(values) < 6 or len(values) % 2:
        return None
    xs, ys = values[::2], values[1::2]
    width, height = max(xs) - min(xs), max(ys) - min(ys)
    return [min(xs), -max(ys), width, height] if width > 0 and height > 0 else None


def local_emoji_font():
    path = Path('/System/Library/Fonts/Apple Color Emoji.ttc')
    if not path.is_file():
        return '', {}
    try:
        with path.open('rb') as font:
            signature = font.read(4)
            if signature == b'ttcf':
                font.seek(12)
                offset = struct.unpack('>I', font.read(4))[0]
            else:
                offset = 0
            font.seek(offset + 4)
            count = struct.unpack('>H', font.read(2))[0]
            font.seek(offset + 12)
            tables = {}
            for _ in range(count):
                tag, _, start, _ = struct.unpack('>4sIII', font.read(16))
                tables[tag] = start
            font.seek(tables[b'head'] + 18)
            units = struct.unpack('>H', font.read(2))[0]
            font.seek(tables[b'hhea'] + 4)
            ascent, descent = struct.unpack('>hh', font.read(4))
        if units <= 0 or ascent <= descent:
            return '', {}
        metrics = {'APPLE': {'family': 'Apple Color Emoji', 'unitsPerEm': units, 'ascent': ascent, 'descent': descent}}
        # Local font matching keeps Apple metrics from changing a fallback font.
        css = '@font-face{font-family:"Openfig Emoji APPLE";src:local("Apple Color Emoji");size-adjust:' + str(100 * units / (ascent - descent)) + '%;}'
        return css, metrics
    except (OSError, KeyError, struct.error):
        return '', {}


def glyph_layout_data(text_layout, emoji_image_set=None):
    glyphs = []
    for glyph in (text_layout or {}).get('glyphs', []) or []:
        path_id = glyph.get('commandsBlob')
        emoji_code_points = glyph.get('emojiCodePoints') or []
        if not emoji_code_points and (path_id is None or str(path_id) not in glyph_paths):
            continue
        position = glyph.get('position') or {}
        record = {
            'pathId': str(path_id) if path_id is not None else None,
            'index': int(glyph.get('firstCharacter', 0)),
            'x': float(position.get('x', 0)),
            'y': float(position.get('y', 0)),
            'fontSize': float(glyph.get('fontSize', 0)),
            'rotation': float(glyph.get('rotation', 0) or 0),
        }
        if emoji_code_points:
            record['emojiCodePoints'] = [int(point) for point in emoji_code_points]
            record['emojiImageSet'] = glyph.get('emojiImageSet') or emoji_image_set
            record['advance'] = float(glyph['advance']) if glyph.get('advance') is not None else 1.0
            record['emojiBounds'] = emoji_glyph_bounds(path_id)
        glyphs.append(record)
    return glyphs


def geometry_override_data(records, detail):
    geometry = []
    transform = matrix_data(detail.get('transform')) if detail.get('transform') else None
    size = detail.get('size') or {}
    for item in records or []:
        path_data = command_paths.get(str(item.get('commandsBlob')))
        if path_data:
            entry = {
                'path': path_data['path'],
                'viewBox': path_data['viewBox'],
                'windingRule': item.get('windingRule', 'NONZERO'),
            }
            if transform:
                entry['transform'] = transform
            if size:
                entry['size'] = [float(size.get('x', 0)), float(size.get('y', 0))]
            geometry.append(entry)
    return geometry


component_prop_parents = {}
for source_node in raw_nodes.values():
    for definition in source_node.get('componentPropDefs') or []:
        parent_id = guid_id(definition.get('parentPropDefId'))
        if parent_id:
            component_prop_parents[guid_id(definition.get('id'))] = parent_id


def component_prop_value(value, properties):
    if not isinstance(value, dict):
        return None
    reference = value.get('propRefValue') or {}
    if reference:
        return assigned_component_prop(guid_id(reference.get('defId')), properties)
    if 'boolValue' in value:
        return ('VISIBLE', bool(value['boolValue']))
    text = value.get('textDataValue', value.get('textValue'))
    if isinstance(text, dict) and 'characters' in text:
        return ('TEXT_DATA', text['characters'])
    symbol = value.get('guidValue') or (value.get('symbolIdValue') or {}).get('guid')
    if symbol:
        return ('OVERRIDDEN_SYMBOL_ID', symbol)
    return None


def assigned_component_prop(definition_id, properties):
    seen = set()
    while definition_id and definition_id not in seen:
        if definition_id in properties:
            return properties[definition_id]
        seen.add(definition_id)
        definition_id = component_prop_parents.get(definition_id)
    return None


def instance_component_props(source_node, parent_properties=None):
    properties = {}
    for assignment in source_node.get('componentPropAssignments') or []:
        variable_value = (assignment.get('varValue') or {}).get('value') or {}
        value = component_prop_value(variable_value, parent_properties or {})
        if value is None:
            value = component_prop_value(assignment.get('value'), parent_properties or {})
        if value is not None:
            properties[guid_id(assignment.get('defID'))] = value
    return properties


def component_prop_overrides(source_node):
    properties = instance_component_props(source_node)
    symbol_id = guid_id((source_node.get('symbolData') or {}).get('symbolID'))
    if not properties or symbol_id not in all_nodes:
        return []
    overrides = []

    def visit(component_id, inherited_path, values, chain):
        if component_id in chain or component_id not in all_nodes:
            return
        chain = chain | {component_id}
        pending = [(child_id, inherited_path) for child_id in reversed(all_nodes[component_id].get('childIds', []))]
        while pending:
            target_id, prefix = pending.pop()
            target = raw_nodes.get(target_id, {})
            key = target.get('overrideKey') or target.get('guid')
            path = prefix + [key]
            patch = {'guidPath': {'guids': path}, 'componentProp': True}
            swapped = None
            for reference in target.get('componentPropRefs') or []:
                if reference.get('isDeleted'):
                    continue
                value = assigned_component_prop(guid_id(reference.get('defID')), values)
                if value is None or value[0] != reference.get('componentPropNodeField'):
                    continue
                field, resolved = value
                if field == 'TEXT_DATA':
                    patch['textData'] = {'characters': resolved}
                elif field == 'VISIBLE':
                    patch['visible'] = resolved
                elif field == 'OVERRIDDEN_SYMBOL_ID':
                    patch['overriddenSymbolID'] = resolved
                    swapped = guid_id(resolved)
            if len(patch) > 2:
                overrides.append(patch)
            nested_values = instance_component_props(target, values)
            if nested_values:
                nested_symbol = swapped or guid_id((target.get('symbolData') or {}).get('symbolID'))
                visit(nested_symbol, path, nested_values, chain)
            for child_id in reversed(all_nodes.get(target_id, {}).get('childIds', [])):
                pending.append((child_id, prefix))

    visit(symbol_id, [], properties, set())
    return overrides


def symbol_override_data(source_node):
    symbol_data = source_node.get('symbolData') or {}
    derived = {}
    for item in source_node.get('derivedSymbolData') or []:
        path = tuple(guid_id(guid) for guid in (item.get('guidPath') or {}).get('guids', []))
        derived[path] = item
    combined = {}
    for item in (symbol_data.get('symbolOverrides') or []) + component_prop_overrides(source_node):
        path = tuple(guid_id(guid) for guid in (item.get('guidPath') or {}).get('guids', []))
        combined[path] = {**combined.get(path, {}), **item}
    for path, detail in derived.items():
        combined.setdefault(path, {'guidPath': detail.get('guidPath', {})})
    overrides = []
    for path, item in combined.items():
        detail = derived.get(path, {})
        text_layout = detail.get('derivedTextData') or {}
        text_data = item.get('textData') or {}
        size = item.get('size') or detail.get('size') or {}
        transform = item.get('transform') or detail.get('transform')
        override = {
            'path': list(path),
            'overriddenSymbolId': guid_id(item.get('overriddenSymbolID')),
            'componentProp': item.get('componentProp'),
            'fills': paint_override_data(item.get('fillPaints')),
            'strokes': paint_override_data(item.get('strokePaints')),
            'text': text_data.get('characters'),
            'size': [float(size.get('x', 0)), float(size.get('y', 0))] if size else None,
            'nodeTransform': matrix_data(transform) if transform else None,
            'textLayoutSize': [float((text_layout.get('layoutSize') or {}).get('x', 0)), float((text_layout.get('layoutSize') or {}).get('y', 0))] if text_layout.get('layoutSize') else None,
            'textBaselines': [{'x': float(line.get('position', {}).get('x', 0)), 'y': float(line.get('position', {}).get('y', 0)), 'start': int(line.get('firstCharacter', 0)), 'end': int(line.get('endCharacter', 0))} for line in text_layout.get('baselines', [])],
            'glyphs': glyph_layout_data(text_layout, detail.get('emojiImageSet') or item.get('emojiImageSet') or source_node.get('emojiImageSet')),
            'fillGeometry': geometry_override_data(detail.get('fillGeometry'), detail),
            'strokeGeometry': geometry_override_data(detail.get('strokeGeometry'), detail),
            'fontSize': item.get('fontSize'),
            'font': (item.get('fontName') or {}).get('family'),
            'fontStyle': (item.get('fontName') or {}).get('style'),
            'lineHeight': item.get('lineHeight'),
            'letterSpacing': item.get('letterSpacing'),
            'textDecoration': item.get('textDecoration'),
            'textCase': item.get('textCase'),
            'strokeWeight': item.get('strokeWeight'),
            'opacity': item.get('opacity'),
            'visible': item.get('visible'),
        }
        overrides.append({key: value for key, value in override.items() if value is not None})
    return guid_id(symbol_data.get('symbolID')), overrides, guid_id(source_node.get('publishID'))

for node_id in sorted(included):
    n = all_nodes[node_id]
    source_node = raw_nodes.get(node_id, {})
    image_assets = iter([a.get('hash') for a in n.get('assetRefs', []) if a.get('kind') == 'image-fill'])
    fills = []
    source_fills = source_node.get('fillPaints', []) or []
    for index, paint in enumerate(n.get('fills', []) or []):
        source_paint = source_fills[index] if index < len(source_fills) else {}
        kind = paint.get('type', '')
        item = {'type': kind, 'visible': paint.get('visible', True), 'opacity': float(paint.get('opacity', 1)), 'blendMode': paint.get('blendMode', 'NORMAL'), 'colorVariable': color_variables.binding(source_paint.get('colorVar'))}
        if kind == 'SOLID':
            item['color'] = color_data(paint.get('color'))
        elif kind.startswith('GRADIENT'):
            item['stops'] = [{'position': float(s.get('position', 0)), 'color': color_data(s.get('color')), 'colorVariable': color_variables.binding(s.get('colorVar'))} for s in source_paint.get('stops', paint.get('stops', []))]
            item['transform'] = matrix_data(paint.get('transform'))
        elif kind == 'IMAGE':
            item['hash'] = next(image_assets, None)
            item['mode'] = paint.get('imageScaleMode', 'FILL')
            item['transform'] = matrix_data(source_paint.get('transform'))
            item['paintFilter'] = paint_filter_data(source_paint.get('paintFilter'))
            if item['visible'] and item['hash'] in images_index:
                image_hashes.add(item['hash'])
        elif kind == 'PATTERN':
            item['sourceNode'] = guid_id(source_paint.get('sourceNodeId') or paint.get('sourceNodeId'))
            item['scale'] = float(source_paint.get('scale', paint.get('scale', 1)))
            item['spacing'] = float(source_paint.get('spacing', paint.get('spacing', 0)))
            spacing = source_paint.get('patternSpacing') or paint.get('patternSpacing') or {}
            item['patternSpacing'] = [float(spacing.get('x', 0)), float(spacing.get('y', 0))]
            item['tileType'] = source_paint.get('patternTileType', paint.get('patternTileType', 'RECTANGULAR'))
            item['horizontalAlignment'] = source_paint.get('horizontalAlignment', paint.get('horizontalAlignment', 'CENTER'))
            item['verticalAlignment'] = source_paint.get('verticalAlignment', paint.get('verticalAlignment', 'CENTER'))
        fills.append(item)
    strokes = []
    source_strokes = source_node.get('strokePaints', []) or []
    for index, paint in enumerate(n.get('strokes', []) or []):
        source_paint = source_strokes[index] if index < len(source_strokes) else {}
        strokes.append({'type': paint.get('type', ''), 'visible': paint.get('visible', True), 'opacity': float(paint.get('opacity', 1)), 'blendMode': paint.get('blendMode', 'NORMAL'), 'color': color_data(paint.get('color')), 'colorVariable': color_variables.binding(source_paint.get('colorVar'))})
    b = n.get('bounds') or {}
    typography = n.get('typography') or {}
    source_text = source_node.get('textData') or {}
    style_overrides = {int(x.get('styleID', 0)): x for x in source_text.get('styleOverrideTable', [])}
    char_styles = source_text.get('characterStyleIDs', [])
    text_runs = []
    if char_styles:
        start = 0
        for index in range(1, len(char_styles) + 1):
            if index < len(char_styles) and char_styles[index] == char_styles[start]:
                continue
            style_id = int(char_styles[start])
            override = style_overrides.get(style_id, {})
            run_font = override.get('fontName') or {}
            run_paints = override.get('fillPaints') or []
            run_fill = next((x for x in run_paints if x.get('visible', True) and x.get('type') == 'SOLID'), None)
            run_color = color_data(run_fill.get('color')) if run_fill else None
            spacing = override.get('letterSpacing') or {}
            text_runs.append({'start': start, 'end': index, 'font': run_font.get('family'), 'fontStyle': run_font.get('style'), 'fontSize': override.get('fontSize'), 'color': run_color, 'colorVariable': color_variables.binding(run_fill.get('colorVar')) if run_fill else None, 'colorOpacity': float(run_fill.get('opacity', 1)) if run_fill else 1, 'letterSpacing': spacing.get('value'), 'letterSpacingUnits': spacing.get('units'), 'decoration': override.get('textDecoration'), 'textCase': override.get('textCase')})
            start = index
    line_height = source_node.get('lineHeight') or typography.get('lineHeight') or {}
    font_style = typography.get('fontName', {}).get('style', '')
    style_name = font_style.lower()
    font_weight = 900 if 'black' in style_name else 800 if 'extrabold' in style_name or 'extra bold' in style_name else 600 if 'semibold' in style_name or 'semi bold' in style_name or 'demi' in style_name else 700 if 'bold' in style_name else 500 if 'medium' in style_name else 300 if 'light' in style_name else 400
    text_layout = n.get('textLayout') or {}
    vector_size = (source_node.get('vectorData') or {}).get('normalizedSize') or {}
    symbol_source, symbol_overrides, symbol_publish_id = symbol_override_data(source_node)
    node = {
        'id': node_id,
        'name': n.get('name', ''),
        'type': n.get('type', ''),
        'children': [x for x in n.get('childIds', []) if x in included],
        'parent': n.get('parentId'),
        'size': [float(b.get('x', 0)), float(b.get('y', 0))],
        'matrix': matrix_data(n.get('transform')),
        'visible': bool(n.get('visible', True)),
        'frameMaskDisabled': bool(n.get('frameMaskDisabled', False)),
        'isMask': bool(source_node.get('mask', False)),
        'maskType': 'OUTLINE' if source_node.get('maskIsOutline') else source_node.get('maskType', 'ALPHA'),
        'isComponentSet': bool(source_node.get('isStateGroup', False) or n.get('type') == 'COMPONENT_SET'),
        'opacity': float(n.get('opacity', 1)),
        'fills': fills,
        'strokes': strokes,
        'strokeWeight': float(source_node.get('strokeWeight', 1 if strokes else 0)),
        'strokeAlign': source_node.get('strokeAlign', 'CENTER'),
        'strokeJoin': source_node.get('strokeJoin', 'MITER'),
        'strokeCap': source_node.get('strokeCap', 'NONE'),
        'dashPattern': [float(value) for value in source_node.get('dashPattern', []) or []],
        'cornerRadius': float(source_node.get('cornerRadius', 0) or 0),
        'cornerRadii': [float(source_node.get(key, source_node.get('cornerRadius', 0)) or 0) for key in ('rectangleTopLeftCornerRadius', 'rectangleTopRightCornerRadius', 'rectangleBottomRightCornerRadius', 'rectangleBottomLeftCornerRadius')],
        'effects': [{'type': effect.get('type', ''), 'visible': effect.get('visible', True), 'offset': [float((effect.get('offset') or {}).get('x', 0)), float((effect.get('offset') or {}).get('y', 0))], 'radius': float(effect.get('radius', 0)), 'spread': float(effect.get('spread', 0)), 'color': color_data(effect.get('color')), 'colorVariable': color_variables.binding(effect.get('colorVar'))} for effect in source_node.get('effects', []) or []],
        'blendMode': source_node.get('blendMode', 'NORMAL'),
        'layout': {'mode': source_node.get('stackMode', ''), 'spacing': float(source_node.get('stackSpacing', 0) or 0), 'alignMain': source_node.get('stackPrimaryAlignItems', 'MIN'), 'alignCross': source_node.get('stackCounterAlignItems', 'MIN'), 'padding': [float(source_node.get('stackPaddingTop', source_node.get('stackVerticalPadding', 0)) or 0), float(source_node.get('stackPaddingRight', source_node.get('stackHorizontalPadding', 0)) or 0), float(source_node.get('stackPaddingBottom', source_node.get('stackVerticalPadding', 0)) or 0), float(source_node.get('stackPaddingLeft', source_node.get('stackHorizontalPadding', 0)) or 0)]},
        'text': n.get('text'),
        'textRuns': text_runs,
        'baselines': [{'x': float(x.get('position', {}).get('x', 0)), 'y': float(x.get('position', {}).get('y', 0)), 'start': int(x.get('firstCharacter', 0)), 'end': int(x.get('endCharacter', 0))} for x in text_layout.get('baselines', [])],
        'glyphs': glyph_layout_data(source_node.get('derivedTextData') or {}, source_node.get('emojiImageSet')),
        'font': typography.get('fontName', {}).get('family', ''),
        'fontStyle': typography.get('fontName', {}).get('style', ''),
        'fontWeight': font_weight,
        'fontItalic': 'italic' in style_name,
        'fontSize': float(typography.get('fontSize', 14)),
        'lineHeight': {'value': float(line_height.get('value', 0) or 0), 'units': line_height.get('units', '')},
        'textDecoration': (style_overrides.get(0) or {}).get('textDecoration', 'NONE'),
        'textCase': (style_overrides.get(0) or {}).get('textCase', 'ORIGINAL'),
        'letterSpacing': (typography.get('letterSpacing') or {}).get('value', 0),
        'letterSpacingUnits': (typography.get('letterSpacing') or {}).get('units', ''),
        'textAlign': n.get('textLayout', {}).get('textAlignHorizontal', 'LEFT'),
        'vector': (n.get('vectorRef') or {}).get('blobId'),
        'vectorSize': [float(vector_size.get('x', b.get('x', 0))), float(vector_size.get('y', b.get('y', 0)))],
        'symbolSource': symbol_source,
        'symbolOverrides': symbol_overrides,
        'symbolPublishId': symbol_publish_id,
        'overrideKey': guid_id(source_node.get('overrideKey')),
        'booleanOperation': source_node.get('booleanOperation'),
    }
    source_fill_geometry = geometry_override_data(source_node.get('fillGeometry'), {})
    source_stroke_geometry = geometry_override_data(source_node.get('strokeGeometry'), {})
    source_geometry_paths = [
        {'d': item['path'], 'fill': 'currentColor', 'stroke': 'none', 'fillRule': item['windingRule'].lower(), 'paintMode': 'fill'}
        for item in source_fill_geometry
    ] + [
        {'d': item['path'], 'fill': 'none', 'stroke': 'currentColor', 'paintMode': 'strokeGeometry'}
        for item in source_stroke_geometry
    ]
    if source_geometry_paths:
        width, height = node['size']
        node['vectorGeometry'] = {'viewBox': ['0', '0', str(max(width, 1)), str(max(height, 1))], 'paths': source_geometry_paths}
    if node['vector'] is not None:
        vector_refs.add(node['vector'])
    if node['parent'] not in included:
        node['parent'] = next((spec['id'] for spec in page_specs if node_id in spec['layerRoots']), None)
    nodes[node_id] = node

flat_data = json.loads(FLATTENED_SOURCE.read_text())
flat_nodes = flat_data['nodes']
symbol_override_cache = {}


def overrides_for_source(source_id):
    if source_id not in symbol_override_cache:
        _, symbol_override_cache[source_id], _ = symbol_override_data(raw_nodes.get(source_id, {}))
    return symbol_override_cache[source_id]


def flattened_descendants(root_id):
    pending = [root_id]
    seen = set()
    while pending:
        node_id = pending.pop()
        if node_id in seen or node_id not in flat_nodes:
            continue
        seen.add(node_id)
        yield node_id, flat_nodes[node_id]
        pending.extend(flat_nodes[node_id].get('children', []))


def flat_override_target_path(flat_id, host_id):
    target = flat_nodes.get(flat_id, {})
    path = [target.get('_overrideKey') or flat_id.rsplit('::', 1)[-1]]
    parent_id = target.get('parentId')
    while parent_id and parent_id != host_id:
        parent = flat_nodes.get(parent_id, {})
        if parent.get('type') == 'INSTANCE':
            path.append(parent.get('_overrideKey') or parent_id.rsplit('::', 1)[-1])
        parent_id = parent.get('parentId')
    return list(reversed(path)) if parent_id == host_id else None


def flat_symbol_override(flat_id, flat):
    target_source = flat_id.rsplit('::', 1)[-1]
    ancestor_id = flat.get('parentId')
    matches = []
    seen_matches = set()

    def add_match(source_id, host_id, override):
        key = (source_id, host_id, tuple(override.get('path') or []))
        if key not in seen_matches:
            matches.append((source_id, host_id, override))
            seen_matches.add(key)

    while ancestor_id:
        source_id = ancestor_id.rsplit('::', 1)[-1]
        for override in overrides_for_source(source_id):
            path = override.get('path') or []
            if not path:
                continue
            if path == flat_override_target_path(flat_id, ancestor_id):
                add_match(source_id, ancestor_id, override)
                continue
            if len(path) < 2:
                continue
            if any(geometry.get('transform') for key in ('fillGeometry', 'strokeGeometry') for geometry in override.get(key, [])):
                continue
            prefix_nodes = [node_id for node_id, item in flattened_descendants(ancestor_id) if item.get('_overrideKey') == path[0]]
            if len(prefix_nodes) != 1:
                continue
            prefix_id = prefix_nodes[0]
            if not any(node_id == flat_id for node_id, _ in flattened_descendants(prefix_id)):
                continue
            for slot in ('fills', 'strokes'):
                if not override.get(slot):
                    continue
                candidates = [
                    node_id for node_id, item in flattened_descendants(prefix_id)
                    if item.get('type') == 'VECTOR' and item.get(slot)
                ]
                geometry = override.get('fillGeometry' if slot == 'fills' else 'strokeGeometry')
                if not candidates and geometry:
                    candidates = [
                        node_id for node_id, item in flattened_descendants(prefix_id)
                        if item.get('type') == 'VECTOR'
                    ]
                if len(candidates) == 1 and candidates[0] == flat_id:
                    add_match(source_id, ancestor_id, override)
        ancestor_id = flat_nodes.get(ancestor_id, {}).get('parentId')
    if not matches:
        return {}

    result = {}
    for key in ('text', 'size', 'nodeTransform', 'textLayoutSize', 'textBaselines', 'glyphs', 'overriddenSymbolId', 'componentProp', 'fontSize', 'font', 'fontStyle', 'lineHeight', 'letterSpacing', 'textDecoration', 'textCase', 'strokeWeight', 'opacity', 'visible'):
        values = [override[key] for _, _, override in matches if key in override]
        if values:
            result[key] = values[-1]

    if result.get('nodeTransform') and not result.get('size'):
        # Constraint-resolved transforms invalidate the decoder's blanket instance scaling.
        original_size = raw_nodes.get(target_source, {}).get('size')
        if original_size:
            result['size'] = [float(original_size.get('x', 0)), float(original_size.get('y', 0))]

    for key in ('fills', 'strokes'):
        palettes = [override[key] for _, _, override in matches if override.get(key)]
        if palettes and len({json.dumps(palette, sort_keys=True) for palette in palettes}) == 1:
            result[key] = palettes[-1]

    for slot, key in (('fills', 'fillGeometry'), ('strokes', 'strokeGeometry')):
        geometry = []
        source_size = raw_nodes.get(target_source, {}).get('size') or {}
        for _, host_id, override in matches:
            for item in override.get(key, []):
                entry = dict(item)
                entry['paintOverrides'] = {'fills': override.get('fills', []), 'strokes': override.get('strokes', [])}
                geometry_size = item.get('size')
                if geometry_size:
                    entry['sourceSize'] = [float(geometry_size[0]), float(geometry_size[1])]
                else:
                    entry['sourceSize'] = [float(source_size.get('x', flat.get('size', {}).get('x', 0))), float(source_size.get('y', flat.get('size', {}).get('y', 0)))]
                entry['transform'] = None if override.get('nodeTransform') and override.get('path') == flat_override_target_path(flat_id, host_id) else relative_geometry_transform(entry.get('transform'), flat_id, host_id, entry['sourceSize'])
                geometry.append(entry)
        if geometry:
            result[key] = geometry
    return result


screen_roots = {root for spec in page_specs for root in spec['boardRoots']}
screen_node_ids = set()
pending = sorted(screen_roots)
while pending:
    current_id = pending.pop()
    if current_id in screen_node_ids or current_id not in flat_nodes:
        continue
    screen_node_ids.add(current_id)
    pending.extend(flat_nodes[current_id].get('children', []))


def flat_color_paint(paint, source_paints, override_paints, index):
    kind = paint.get('type', '')
    matching = next((item for item in source_paints if item.get('type') == kind and not item.get('_flat_used')), None)
    if matching is not None:
        matching['_flat_used'] = True
    override = override_paints[index] if index < len(override_paints) else {}
    visible = paint.get('visible', True)
    opacity = float(paint.get('opacity', 1))
    blend = paint.get('blendMode', 'NORMAL')
    if kind == 'SOLID':
        if override.get('type') == kind:
            visible = override.get('visible', visible)
            opacity = float(override.get('opacity', opacity))
            color = override.get('color') or color_data(paint.get('color'))
        else:
            color = color_data(paint.get('color'))
        binding = override.get('colorVariable') if override.get('type') == kind else color_variables.binding(paint.get('colorVar')) or (matching or {}).get('colorVariable')
        return {'type': kind, 'visible': visible, 'opacity': opacity, 'blendMode': blend, 'color': color, 'colorVariable': binding}
    if kind == 'IMAGE':
        digest = paint.get('imageRef')
        if digest not in images_index:
            return matching
        image_hashes.add(digest)
        return {
            'type': kind,
            'visible': visible,
            'opacity': opacity,
            'blendMode': blend,
            'hash': digest,
            'mode': paint.get('scaleMode', 'FILL'),
            'transform': matching.get('transform', [1, 0, 0, 1, 0, 0]) if matching else [1, 0, 0, 1, 0, 0],
            'paintFilter': override.get('paintFilter') or (matching or {}).get('paintFilter'),
        }
    if matching:
        result = {key: value for key, value in matching.items() if key != '_flat_used'}
        result.update({'visible': visible, 'opacity': opacity, 'blendMode': blend})
        handles = paint.get('gradientHandlePositions')
        if handles:
            result['handles'] = [[float(handle.get('x', 0)), float(handle.get('y', 0))] for handle in handles]
        return result
    return None


def flat_stroke_data(paints, source_paints, override_paints):
    result = []
    used = set()
    for index, paint in enumerate(paints or []):
        kind = paint.get('type', '')
        match_index = next((i for i, item in enumerate(source_paints) if i not in used and item.get('type') == kind), None)
        if match_index is not None:
            used.add(match_index)
        override = override_paints[index] if index < len(override_paints) else {}
        if kind == 'SOLID':
            visible = override.get('visible', paint.get('visible', True)) if override.get('type') == kind else paint.get('visible', True)
            opacity = float(override.get('opacity', paint.get('opacity', 1))) if override.get('type') == kind else float(paint.get('opacity', 1))
            color = override.get('color') if override.get('type') == kind and override.get('color') else color_data(paint.get('color'))
            binding = override.get('colorVariable') if override.get('type') == kind else color_variables.binding(paint.get('colorVar')) or (source_paints[match_index].get('colorVariable') if match_index is not None else None)
            result.append({'type': kind, 'visible': visible, 'opacity': opacity, 'blendMode': paint.get('blendMode', 'NORMAL'), 'color': color, 'colorVariable': binding})
        elif match_index is not None:
            item = dict(source_paints[match_index])
            item.update({'visible': paint.get('visible', True), 'opacity': float(paint.get('opacity', 1)), 'blendMode': paint.get('blendMode', 'NORMAL')})
            if kind.startswith('GRADIENT'):
                item['stops'] = [{'position': float(stop.get('position', 0)), 'color': color_data(stop.get('color')), 'colorVariable': color_variables.binding(stop.get('colorVar'))} for stop in paint.get('gradientStops', [])]
                item['handles'] = [[float(handle.get('x', 0)), float(handle.get('y', 0))] for handle in paint.get('gradientHandlePositions', [])]
            result.append(item)
    return result


def multiply_matrices(left, right):
    return [
        left[0] * right[0] + left[2] * right[1],
        left[1] * right[0] + left[3] * right[1],
        left[0] * right[2] + left[2] * right[3],
        left[1] * right[2] + left[3] * right[3],
        left[0] * right[4] + left[2] * right[5] + left[4],
        left[1] * right[4] + left[3] * right[5] + left[5],
    ]


def transformed_bounds(matrix, width, height):
    points = [
        (matrix[0] * x + matrix[2] * y + matrix[4], matrix[1] * x + matrix[3] * y + matrix[5])
        for x, y in ((0, 0), (width, 0), (0, height), (width, height))
    ]
    return [min(point[0] for point in points), min(point[1] for point in points), max(point[0] for point in points), max(point[1] for point in points)]


def flat_node_bounds(root_id, node_id):
    chain = []
    current_id = node_id
    while current_id != root_id and current_id in flat_nodes:
        chain.append(current_id)
        current_id = flat_nodes[current_id].get('parentId')
    if current_id != root_id:
        return None
    matrix = [1, 0, 0, 1, 0, 0]
    for child_id in reversed(chain):
        matrix = multiply_matrices(matrix, flattened_matrix_data(flat_nodes[child_id].get('relativeTransform')))
    size = flat_nodes[node_id].get('size') or {}
    return transformed_bounds(matrix, float(size.get('x', 0)), float(size.get('y', 0)))


def derived_path_bounds(path, source_size, target_size):
    view_box = path.get('viewBox')
    transform = path.get('transform')
    if not view_box or not transform:
        return None
    sx = float(target_size[0]) / float(source_size[0]) if source_size[0] else 1
    sy = float(target_size[1]) / float(source_size[1]) if source_size[1] else 1
    matrix = [sx * transform[0], sy * transform[1], sx * transform[2], sy * transform[3], sx * transform[4], sy * transform[5]]
    x, y, width, height = view_box
    points = [
        (matrix[0] * px + matrix[2] * py + matrix[4], matrix[1] * px + matrix[3] * py + matrix[5])
        for px, py in ((x, y), (x + width, y), (x, y + height), (x + width, y + height))
    ]
    return [min(point[0] for point in points), min(point[1] for point in points), max(point[0] for point in points), max(point[1] for point in points)]


def override_path_outside_node(path, target_size):
    view_box = path.get('viewBox')
    if not view_box or len(view_box) < 4:
        return False
    source_size = path.get('sourceSize') or target_size
    sx = float(target_size[0]) / float(source_size[0]) if source_size[0] else 1
    sy = float(target_size[1]) / float(source_size[1]) if source_size[1] else 1
    transform = path.get('transform') or [1, 0, 0, 1, 0, 0]
    matrix = multiply_matrices(transform, [sx, 0, 0, sy, 0, 0])
    x, y, width, height = [float(value) for value in view_box]
    points = [(matrix[0] * px + matrix[2] * py + matrix[4], matrix[1] * px + matrix[3] * py + matrix[5]) for px, py in ((x, y), (x + width, y), (x, y + height), (x + width, y + height))]
    bounds = [min(point[0] for point in points), min(point[1] for point in points), max(point[0] for point in points), max(point[1] for point in points)]
    outside_x = bounds[2] <= 0 or bounds[0] >= target_size[0] if target_size[0] else bounds[2] < 0 or bounds[0] > 0
    outside_y = bounds[3] <= 0 or bounds[1] >= target_size[1] if target_size[1] else bounds[3] < 0 or bounds[1] > 0
    return outside_x or outside_y


nested_derived_geometry = {}
nested_geometry_source_sizes = {}
nested_geometry_suppressed = set()
for host_flat_id in sorted(screen_node_ids):
    host_flat = flat_nodes[host_flat_id]
    host_source_id = host_flat_id.rsplit('::', 1)[-1]
    if host_flat.get('type') != 'INSTANCE':
        continue
    for override in overrides_for_source(host_source_id):
        path = override.get('path') or []
        if len(path) < 2:
            continue
        prefix_nodes = [node_id for node_id, item in flattened_descendants(host_flat_id) if item.get('_overrideKey') == path[0]]
        if len(prefix_nodes) != 1:
            continue
        prefix_id = prefix_nodes[0]
        prefix = flat_nodes[prefix_id]
        if prefix.get('type') != 'INSTANCE':
            continue
        records = []
        for key, mode, slot in (('fillGeometry', 'fill', 'fills'), ('strokeGeometry', 'strokeGeometry', 'strokes')):
            for geometry in override.get(key, []):
                if not geometry.get('transform'):
                    continue
                records.append({
                    'd': geometry['path'],
                    'fillRule': geometry.get('windingRule', 'NONZERO').lower(),
                    'paintMode': mode,
                    'overridePath': path[1:],
                    'transform': geometry['transform'],
                    'viewBox': geometry.get('viewBox'),
                    'paintOverrides': {'fills': override.get('fills', []), 'strokes': override.get('strokes', [])},
                })
        if not records:
            continue
        nested_derived_geometry.setdefault(prefix_id, []).extend(records)
        prefix_source_id = prefix_id.rsplit('::', 1)[-1]
        source_size = raw_nodes.get(prefix_source_id, {}).get('size') or {}
        nested_geometry_source_sizes[prefix_id] = [float(source_size.get('x', prefix.get('size', {}).get('x', 1))), float(source_size.get('y', prefix.get('size', {}).get('y', 1)))]

for prefix_id, records in nested_derived_geometry.items():
    prefix_size = flat_nodes[prefix_id].get('size') or {}
    target_size = [float(prefix_size.get('x', 1)), float(prefix_size.get('y', 1))]
    source_size = nested_geometry_source_sizes[prefix_id]
    geometry_bounds = [derived_path_bounds(record, source_size, target_size) for record in records]
    geometry_bounds = [bounds for bounds in geometry_bounds if bounds]
    if not geometry_bounds:
        continue
    union = [min(bounds[0] for bounds in geometry_bounds), min(bounds[1] for bounds in geometry_bounds), max(bounds[2] for bounds in geometry_bounds), max(bounds[3] for bounds in geometry_bounds)]
    vector_descendants = [node_id for node_id, item in flattened_descendants(prefix_id) if item.get('type') == 'VECTOR']
    vector_bounds = [flat_node_bounds(prefix_id, node_id) for node_id in vector_descendants]
    if vector_bounds and all(bounds and bounds[0] >= union[0] - 0.5 and bounds[1] >= union[1] - 0.5 and bounds[2] <= union[2] + 0.5 and bounds[3] <= union[3] + 0.5 for bounds in vector_bounds):
        nested_geometry_suppressed.update(vector_descendants)


flat_override_count = 0
for flat_id in sorted(screen_node_ids):
    flat = flat_nodes[flat_id]
    source_id = flat_id.rsplit('::', 1)[-1]
    node = nodes.get(flat_id) or nodes.get(source_id)
    if not node:
        continue
    if flat_id != source_id:
        node = json.loads(json.dumps(node))
        node['id'] = flat_id
        node['symbolSource'] = node.get('symbolSource')
    flat_parent = flat.get('parentId')
    if flat_parent:
        node['parent'] = flat_parent
    node['children'] = [child for child in flat.get('children', []) if child in screen_node_ids]
    node['name'] = flat.get('name', node.get('name', ''))
    node['type'] = flat.get('type', node.get('type', ''))
    if flat.get('size'):
        node['size'] = [float(flat['size'].get('x', node['size'][0])), float(flat['size'].get('y', node['size'][1]))]
    if flat.get('relativeTransform'):
        node['matrix'] = flattened_matrix_data(flat['relativeTransform'])
    if flat.get('visible') is not None:
        node['visible'] = bool(flat['visible'])
    if flat.get('opacity') is not None:
        node['opacity'] = float(flat['opacity'])
    if flat.get('blendMode'):
        node['blendMode'] = flat['blendMode']
    if flat.get('frameMaskDisabled') is not None:
        node['frameMaskDisabled'] = bool(flat['frameMaskDisabled'])
    flat_override = flat_symbol_override(flat_id, flat)
    if flat_override:
        flat_override_count += 1
    if 'visible' in flat_override:
        node['visible'] = flat_override['visible']
        if node['visible'] != raw_nodes.get(source_id, {}).get('visible', True):
            node['_layoutChanged'] = True
    if flat_override.get('nodeTransform'):
        node['matrix'] = flat_override['nodeTransform']
        node['_derivedMatrix'] = True
    if flat_override.get('componentProp'):
        node['_componentPropChanged'] = True
    if flat_override.get('size'):
        node['size'] = flat_override['size']
        node['_derivedSize'] = True
    if node['type'] == 'TEXT' and flat_override.get('textLayoutSize'):
        node['size'] = flat_override['textLayoutSize']
        node['_derivedSize'] = True
    swapped_symbol = flat_override.get('overriddenSymbolId')
    if swapped_symbol and swapped_symbol in nodes and swapped_symbol != node.get('symbolSource'):
        node['symbolSource'] = swapped_symbol
        node['children'] = []
        inherited_overrides = []
        prefix_key = flat.get('_overrideKey')
        ancestor_id = flat.get('parentId')
        while ancestor_id:
            ancestor_source = ancestor_id.rsplit('::', 1)[-1]
            for inherited in overrides_for_source(ancestor_source):
                path = inherited.get('path') or []
                if len(path) > 1 and path[0] == prefix_key:
                    inherited_overrides.append({**inherited, 'path': path[1:]})
            ancestor_id = flat_nodes.get(ancestor_id, {}).get('parentId')
        node['symbolOverrides'] = node.get('symbolOverrides', []) + inherited_overrides
    if flat.get('fills') is not None:
        source_paints = [dict(item) for item in node.get('fills', [])]
        override_paints = flat_override.get('fills', [])
        normalized_fills = []
        if not flat.get('fills') and any(item.get('type') == 'PATTERN' for item in source_paints):
            node['fills'] = source_paints
        else:
            for index, paint in enumerate(flat.get('fills') or []):
                normalized = flat_color_paint(paint, source_paints, override_paints, index)
                if normalized is not None:
                    normalized_fills.append(normalized)
            node['fills'] = normalized_fills
    if flat_override.get('fillGeometry') and flat_override.get('fills') and not node.get('fills'):
        node['fills'] = flat_override['fills']
    if flat.get('strokes') is not None:
        node['strokes'] = flat_stroke_data(flat.get('strokes'), node.get('strokes', []), flat_override.get('strokes', []))
    if flat.get('strokeWeight') is not None:
        node['strokeWeight'] = float(flat['strokeWeight'])
    if flat.get('strokeAlign'):
        node['strokeAlign'] = flat['strokeAlign']
    if flat.get('strokeJoin'):
        node['strokeJoin'] = flat['strokeJoin']
    if flat_id in nested_derived_geometry:
        node['derivedGeometry'] = nested_derived_geometry[flat_id]
        node['derivedGeometrySourceSize'] = nested_geometry_source_sizes[flat_id]
    if flat_id in nested_geometry_suppressed:
        node['suppressVisual'] = True
    if flat.get('cornerRadius') is not None:
        node['cornerRadius'] = float(flat['cornerRadius'])
    if flat.get('rectangleCornerRadii'):
        node['cornerRadii'] = [float(value) for value in flat['rectangleCornerRadii']]
    if flat.get('characters') is not None:
        previous_text = node.get('text')
        node['text'] = flat_override.get('text', flat['characters'])
        if flat_override.get('glyphs'):
            node['glyphs'] = flat_override['glyphs']
        elif previous_text != node['text']:
            node['glyphs'] = []
        style = flat.get('style') or {}
        if style.get('fontFamily'):
            node['font'] = style['fontFamily']
        if style.get('fontSize') is not None:
            node['fontSize'] = float(style['fontSize'])
        if style.get('fontPostScriptName'):
            node['fontStyle'] = style['fontPostScriptName'].rsplit('-', 1)[-1]
            style_name = node['fontStyle'].lower()
            node['fontWeight'] = 900 if 'black' in style_name else 800 if 'extrabold' in style_name else 600 if 'semibold' in style_name or 'demi' in style_name else 700 if 'bold' in style_name else 500 if 'medium' in style_name else 300 if 'light' in style_name else 400
        if style.get('fontWeight') is not None and node.get('fontStyle') in ('', None):
            node['fontWeight'] = int(style['fontWeight'])
        if style.get('italic') is not None:
            node['fontItalic'] = bool(style['italic'])
        if style.get('letterSpacing') is not None:
            node['letterSpacing'] = float(style['letterSpacing'])
            node['letterSpacingUnits'] = 'PIXELS'
        if style.get('lineHeightPercent') is not None:
            node['lineHeight'] = {'value': float(style['lineHeightPercent']) / 100, 'units': 'RAW'}
        if style.get('textAlignHorizontal'):
            node['textAlign'] = style['textAlignHorizontal']
        if style.get('textDecoration'):
            node['textDecoration'] = style['textDecoration']
        if previous_text != node['text']:
            node['textRuns'] = []
            if flat_override.get('textBaselines'):
                node['baselines'] = flat_override['textBaselines']
            elif '\n' not in node['text'] and len(node.get('baselines', [])) == 1:
                line = dict(node['baselines'][0])
                line.update({'start': 0, 'end': len(node['text'])})
                node['baselines'] = [line]
            else:
                node['baselines'] = []
    nodes[flat_id] = node
    if node.get('vector') is not None:
        vector_refs.add(node['vector'])

layout_scopes = set()
for node in nodes.values():
    if not node.get('_layoutChanged'):
        continue
    parent_id = node.get('parent')
    while parent_id in nodes:
        parent = nodes[parent_id]
        if parent.get('type') == 'INSTANCE':
            layout_scopes.add(parent_id)
            break
        parent_id = parent.get('parent')

for scope_id in layout_scopes:
    source = raw_nodes.get(scope_id.rsplit('::', 1)[-1], {})
    scale = float((source.get('symbolData') or {}).get('uniformScaleFactor', 1) or 1)
    pending = list(nodes[scope_id]['children'])
    while pending:
        child = nodes[pending.pop()]
        original = raw_nodes.get(child['id'].rsplit('::', 1)[-1], {})
        if original.get('size') and not child.get('_derivedSize'):
            child['size'] = [float(original['size'].get(axis, 0)) * scale for axis in ('x', 'y')]
        if original.get('transform') and not child.get('_derivedMatrix'):
            child['matrix'] = matrix_data(original['transform'])
            child['matrix'][4:] = [value * scale for value in child['matrix'][4:]]
        pending.extend(child['children'])


def layout_component_properties(node_id, seen=None, force=False):
    seen = seen if seen is not None else set()
    if node_id in seen or node_id not in nodes:
        return False
    seen.add(node_id)
    node = nodes[node_id]
    force = force or node_id in layout_scopes
    own_changed = node.get('_componentPropChanged', False) or node.get('_layoutChanged', False)
    changed = own_changed or force
    child_changes = [layout_component_properties(child_id, seen, force) for child_id in node['children']]
    changed = changed or any(child_changes)
    layout = node.get('layout') or {}
    if not changed or layout.get('mode') not in ('HORIZONTAL', 'VERTICAL'):
        return own_changed if node.get('type') == 'INSTANCE' else changed
    children = [nodes[child_id] for child_id in node['children'] if nodes[child_id]['visible'] and raw_nodes.get(child_id.rsplit('::', 1)[-1], {}).get('stackPositioning') != 'ABSOLUTE']
    if not children:
        return own_changed if node.get('type') == 'INSTANCE' else changed
    source = raw_nodes.get(node_id.rsplit('::', 1)[-1], {})
    scale = float((source.get('symbolData') or {}).get('uniformScaleFactor', 1) or 1)
    for child in children:
        original = raw_nodes.get(child['id'].rsplit('::', 1)[-1], {}).get('size')
        if original and not child.get('_derivedSize'):
            child['size'] = [float(original.get('x', 0)) * scale, float(original.get('y', 0)) * scale]
    horizontal = layout['mode'] == 'HORIZONTAL'
    main_axis, cross_axis = (0, 1) if horizontal else (1, 0)
    top, right, bottom, left = layout.get('padding', [0, 0, 0, 0])
    before, after, cross_before, cross_after = (left, right, top, bottom) if horizontal else (top, bottom, left, right)
    gap = float(layout.get('spacing', 0))
    available = node['size'][main_axis] - before - after
    grow = [(child, 0 if child.get('_derivedSize') else float(raw_nodes.get(child['id'].rsplit('::', 1)[-1], {}).get('stackChildPrimaryGrow', 0) or 0)) for child in children]
    grow_total = sum(weight for _, weight in grow)
    if grow_total:
        fixed = sum(child['size'][main_axis] for child, weight in grow if not weight)
        remaining = max(0, available - fixed - gap * (len(children) - 1))
        for child, weight in grow:
            if weight:
                child['size'][main_axis] = remaining * weight / grow_total
    occupied = sum(child['size'][main_axis] for child in children) + gap * (len(children) - 1)
    align = layout.get('alignMain', 'MIN')
    cursor = before + (available - occupied) * (0.5 if align == 'CENTER' else 1 if align == 'MAX' else 0)
    if align == 'SPACE_BETWEEN' and len(children) > 1:
        gap = (available - sum(child['size'][main_axis] for child in children)) / (len(children) - 1)
    cross_available = node['size'][cross_axis] - cross_before - cross_after
    for child in children:
        cross_align = layout.get('alignCross', 'MIN')
        original = raw_nodes.get(child['id'].rsplit('::', 1)[-1], {})
        if original.get('stackChildAlignSelf') == 'STRETCH':
            child['size'][cross_axis] = max(0, cross_available)
        cross = cross_before + (cross_available - child['size'][cross_axis]) * (0.5 if cross_align == 'CENTER' else 1 if cross_align == 'MAX' else 0)
        matrix = child['matrix'][:]
        width, height = child['size']
        min_x = min(0, matrix[0] * width, matrix[2] * height, matrix[0] * width + matrix[2] * height)
        min_y = min(0, matrix[1] * width, matrix[3] * height, matrix[1] * width + matrix[3] * height)
        origin = (min_x, min_y)
        matrix[4 + main_axis] = cursor - origin[main_axis]
        if cross_align != 'BASELINE':
            matrix[4 + cross_axis] = cross - origin[cross_axis]
        if not child.get('_derivedMatrix'):
            child['matrix'] = matrix
        cursor += child['size'][main_axis] + gap
    return own_changed if node.get('type') == 'INSTANCE' else changed


for root_id in sorted(screen_roots):
    layout_component_properties(root_id)
for node in nodes.values():
    node.pop('_componentPropChanged', None)
    node.pop('_layoutChanged', None)
    node.pop('_derivedMatrix', None)
    node.pop('_derivedSize', None)


for flat_id in sorted(included | screen_node_ids):
    flat = flat_nodes.get(flat_id, {})
    node = nodes.get(flat_id)
    if not node or node.get('type') == 'TEXT':
        continue
    flat_override = flat_symbol_override(flat_id, flat)
    has_override_geometry = bool(flat_override.get('fillGeometry') or flat_override.get('strokeGeometry'))
    is_frame = node.get('type') == 'FRAME'
    if is_frame:
        node.pop('vectorGeometry', None)
        if not has_override_geometry:
            continue
    if flat.get('type') not in ('VECTOR', 'BOOLEAN_OPERATION') and not has_override_geometry:
        continue
    geometry_paths = []
    for index, geometry in enumerate(flat.get('fillGeometry') or []):
        if geometry.get('path'):
            geometry_paths.append({'d': geometry['path'], 'fill': 'currentColor', 'stroke': 'none', 'fillRule': geometry.get('windingRule', 'NONZERO').lower(), 'paintMode': 'fill'})
    for index, geometry in enumerate(flat.get('strokeGeometry') or []):
        if geometry.get('path'):
            geometry_paths.append({'d': geometry['path'], 'fill': 'none', 'stroke': 'currentColor', 'paintMode': 'strokeGeometry'})
    if not geometry_paths:
        geometry_paths = list((node.get('vectorGeometry') or {}).get('paths') or [])
    override_paths = []
    for index, geometry in enumerate(flat_override.get('fillGeometry') or []):
        if geometry.get('path'):
            override_paths.append({'d': geometry['path'], 'fill': 'currentColor', 'stroke': 'none', 'fillRule': geometry.get('windingRule', 'NONZERO').lower(), 'paintMode': 'fill', 'transform': geometry.get('transform'), 'viewBox': geometry.get('viewBox'), 'sourceSize': geometry.get('sourceSize'), 'paintOverrides': geometry.get('paintOverrides') or {'fills': node.get('fills', []), 'strokes': node.get('strokes', [])}})
    for index, geometry in enumerate(flat_override.get('strokeGeometry') or []):
        if geometry.get('path'):
            override_paths.append({'d': geometry['path'], 'fill': 'none', 'stroke': 'currentColor', 'paintMode': 'strokeGeometry', 'transform': geometry.get('transform'), 'viewBox': geometry.get('viewBox'), 'sourceSize': geometry.get('sourceSize'), 'paintOverrides': geometry.get('paintOverrides') or {'fills': node.get('fills', []), 'strokes': node.get('strokes', [])}})
    override_paths = [path for path in override_paths if not override_path_outside_node(path, node['size'])]
    replaced_modes = {path.get('paintMode') for path in override_paths}
    if is_frame and any(
        any(paint.get('visible', True) for paint in node.get(slot, [])) and mode not in replaced_modes
        for slot, mode in (('fills', 'fill'), ('strokes', 'strokeGeometry'))
    ):
        continue
    if override_paths:
        def replaced_base_path(path):
            if path.get('paintMode') in replaced_modes:
                return True
            if 'strokeGeometry' in replaced_modes and (path.get('networkStrokeIndex') is not None or path.get('strokeIndex') is not None or path.get('stroke') not in (None, 'none')):
                return True
            if 'fill' in replaced_modes and (path.get('fillIndex') is not None or path.get('fill') not in (None, 'none')):
                return True
            return False

        geometry_paths = [path for path in geometry_paths if not replaced_base_path(path)]
        geometry_paths.extend(override_paths)
    if geometry_paths:
        node['vectorGeometry'] = {'viewBox': ['0', '0', str(max(node['size'][0], 1)), str(max(node['size'][1], 1))], 'paths': geometry_paths}

for prefix_id, records in nested_derived_geometry.items():
    node = nodes.get(prefix_id)
    if not node:
        continue
    vector_ids = [node_id for node_id, item in flattened_descendants(prefix_id) if item.get('type') == 'VECTOR']
    fallback_paints = {}
    for slot in ('fills', 'strokes'):
        palettes = {}
        for vector_id in vector_ids:
            vector = nodes.get(vector_id) or {}
            paints = [paint for paint in vector.get(slot, []) if paint.get('visible')]
            if paints:
                palettes[json.dumps(paints, sort_keys=True)] = paints
        if len(palettes) == 1:
            fallback_paints[slot] = next(iter(palettes.values()))
    node['derivedGeometryPaints'] = fallback_paints

def derived_symbol_paint_keys(source_id):
    required = set()
    seen_keys = set()
    pending = [source_id]
    while pending:
        source = nodes.get(pending.pop())
        if not source or not source.get('visible', True):
            return None
        if source.get('isMask') or source.get('opacity', 1) != 1 or any(effect.get('visible', True) for effect in source.get('effects', [])):
            return None
        slots = [slot for slot in ('fills', 'strokes') if any(paint.get('visible', True) for paint in source.get(slot, []))]
        if source.get('type') == 'VECTOR' and not source.get('children'):
            if slots:
                key = source.get('overrideKey')
                if not key or key in seen_keys:
                    return None
                seen_keys.add(key)
                required.update((key, slot) for slot in slots)
        elif source.get('type') in ('SYMBOL', 'COMPONENT', 'FRAME', 'GROUP') and not slots:
            pending.extend(source.get('children', []))
        else:
            return None
    return required


for prefix_id, records in nested_derived_geometry.items():
    node = nodes.get(prefix_id)
    if not node or node.get('type') != 'INSTANCE' or node.get('children') or not node.get('symbolSource'):
        continue
    if any(effect.get('visible', True) for effect in node.get('effects', [])) or any(paint.get('visible', True) for slot in ('fills', 'strokes') for paint in node.get(slot, [])):
        continue
    required = derived_symbol_paint_keys(node['symbolSource'])
    supplied = set()
    for record in records:
        path = record.get('overridePath')
        slot = 'fills' if record['paintMode'] == 'fill' else 'strokes'
        paints = record.get('paintOverrides', {}).get(slot) or node.get('derivedGeometryPaints', {}).get(slot, [])
        if path and record.get('d') and any(paint.get('visible', True) for paint in paints):
            supplied.add((path[-1], slot))
    if required and required.issubset(supplied):
        node['derivedGeometryComplete'] = True


vectors_index = json.loads((ASSETS / 'vectors.json').read_text())['vectors']
vector_meta = {int(item['blobId']): item for item in vectors_index}
vectors = {}


def vector_network_path(blob_path):
    content = gzip.decompress(blob_path.read_bytes())
    if len(content) < 12:
        return ''
    vertex_count, segment_count, _ = struct.unpack_from('<III', content, 0)
    offset = 12
    vertices = []
    for _ in range(vertex_count):
        if offset + 12 > len(content):
            return ''
        _, x, y = struct.unpack_from('<Iff', content, offset)
        vertices.append((x, y))
        offset += 12
    segments = []
    for _ in range(segment_count):
        if offset + 28 > len(content):
            return ''
        style_id, start, start_dx, start_dy, end, end_dx, end_dy = struct.unpack_from('<IIffIff', content, offset)
        if start >= vertex_count or end >= vertex_count:
            return ''
        segments.append((style_id, start, start_dx, start_dy, end, end_dx, end_dy))
        offset += 28

    def number(value):
        return format(float(value), '.7g')

    commands = []
    current_start = None
    previous_end = None
    for _, start, start_dx, start_dy, end, end_dx, end_dy in segments:
        sx, sy = vertices[start]
        ex, ey = vertices[end]
        if previous_end != start:
            commands.extend(('M', number(sx), number(sy)))
            current_start = start
        if start_dx == start_dy == end_dx == end_dy == 0:
            commands.extend(('L', number(ex), number(ey)))
        else:
            commands.extend((
                'C', number(sx + start_dx), number(sy + start_dy),
                number(ex + end_dx), number(ey + end_dy), number(ex), number(ey),
            ))
        previous_end = end
        if current_start is not None and end == current_start:
            commands.append('Z')
            previous_end = None
            current_start = None
    return ' '.join(commands)


for flat_id in sorted(included | screen_node_ids):
    node = nodes.get(flat_id)
    blob_id = node.get('vector') if node else None
    meta = vector_meta.get(int(blob_id)) if blob_id is not None else None
    if not meta or meta.get('svgPath') or node.get('vectorGeometry', {}).get('paths'):
        continue
    blob_path = ASSETS.parent / meta['path']
    if not blob_path.exists():
        continue
    path_data = vector_network_path(blob_path)
    if not path_data:
        continue
    vector_size = node.get('vectorSize') or node.get('size') or [0, 0]
    node['vectorGeometry'] = {
        'viewBox': ['0', '0', str(max(vector_size[0], 1)), str(max(vector_size[1], 1))],
        'paths': [{'d': path_data, 'fill': 'none', 'networkStrokeIndex': 0}],
    }

for blob_id in sorted(vector_refs, key=str):
    meta = vector_meta.get(int(blob_id))
    if not meta or not meta.get('svgPath'):
        continue
    path = ASSETS.parent / meta['svgPath']
    if not path.exists():
        continue
    root = ET.parse(path).getroot()
    vb = root.attrib.get('viewBox', '0 0 24 24').split()
    paths = []
    for element in root.iter():
        if element.tag.rsplit('}', 1)[-1] != 'path':
            continue
        d = element.attrib.get('d')
        if d:
            paths.append({'d': d, 'fill': element.attrib.get('fill', 'currentColor'), 'stroke': element.attrib.get('stroke', 'none'), 'fillRule': element.attrib.get('fill-rule', 'nonzero'), 'strokeWidth': element.attrib.get('stroke-width', '1')})
    vectors[str(blob_id)] = {'viewBox': vb, 'paths': paths}

vector_geometry_count = 0
for flat_id in sorted(screen_node_ids):
    node = nodes.get(flat_id, {})
    blob_id = node.get('vector')
    if blob_id is None or (str(blob_id) in vectors and vectors[str(blob_id)]['paths']):
        continue
    flat = flat_nodes.get(flat_id, {})
    paths = []
    for index, geometry in enumerate(flat.get('fillGeometry') or []):
        if geometry.get('path'):
            paths.append({'d': geometry['path'], 'fill': 'currentColor', 'stroke': 'none', 'fillRule': geometry.get('windingRule', 'nonzero'), 'paintMode': 'fill'})
    for index, geometry in enumerate(flat.get('strokeGeometry') or []):
        if geometry.get('path'):
            paths.append({'d': geometry['path'], 'fill': 'none', 'stroke': 'currentColor', 'paintMode': 'strokeGeometry'})
    if paths:
        vectors[str(blob_id)] = {'viewBox': ['0', '0', str(node['size'][0]), str(node['size'][1])], 'paths': paths}
        vector_geometry_count += 1

for flat_id in sorted(screen_node_ids):
    flat = flat_nodes.get(flat_id, {})
    override = flat_symbol_override(flat_id, flat)
    node = nodes.get(flat_id)
    if not node or node.get('type') != 'VECTOR' or not (override.get('fillGeometry') or override.get('strokeGeometry')):
        continue
    if any(item.get('visible', True) for item in flat.get('fills') or []) or not any(item.get('visible', True) for item in flat.get('strokes') or []):
        continue
    base = vectors.get(str(node.get('vector')))
    if not base:
        continue
    geometry = node.get('vectorGeometry') or {}
    paths = geometry.get('paths') or []
    if any(item.get('paintMode') == 'strokeGeometry' for item in paths):
        continue
    if any('networkStrokeIndex' in item or 'strokeIndex' in item for item in paths):
        continue
    base_paths = [{**item, 'fill': 'none', 'networkStrokeIndex': 0, 'viewBox': base['viewBox']} for item in base['paths']]
    node['vectorGeometry'] = {'viewBox': geometry.get('viewBox') or base['viewBox'], 'paths': base_paths + paths}

# Convert embedded design image fills to browser-ready assets without linking the viewer to the extraction directory.
embedded_images = {}
for digest in sorted(image_hashes):
    item = images_index[digest]
    path = ASSETS / item['path'].replace('assets/images/', 'images/')
    if not path.exists():
        continue
    mime = mimetypes.guess_type(path.name)[0] or 'application/octet-stream'
    encoded = base64.b64encode(path.read_bytes()).decode('ascii')
    embedded_images[digest] = f'data:{mime};base64,' + encoded

image_paints = {}
animated_image_paints = set()
for node in nodes.values():
    for paint in node.get('fills', []):
        digest = paint.get('hash')
        if paint.get('type') != 'IMAGE' or not paint.get('visible') or digest not in embedded_images:
            continue
        render_hash = image_filter_key(digest, paint.get('paintFilter'))
        if not render_hash or render_hash in animated_image_paints:
            continue
        if render_hash not in image_paints:
            original = base64.b64decode(embedded_images[digest].split(',', 1)[1])
            filtered = filter_image_bytes(original, paint.get('paintFilter') or {})
            if filtered is None:
                animated_image_paints.add(render_hash)
                continue
            image_paints[render_hash] = 'data:image/png;base64,' + base64.b64encode(filtered).decode('ascii')
        paint['renderHash'] = render_hash

def has_overlapping_nodes(node_ids):
    boxes = []
    for node_id in node_ids:
        node = nodes[node_id]
        width, height = node.get('previewSize', node['size'])
        if node['visible'] and width > 0 and height > 0:
            boxes.append(transformed_bounds(node.get('previewMatrix', node['matrix']), width, height))
    boxes.sort(key=lambda box: box[0])
    active = []
    for box in boxes:
        active = [item for item in active if item[2] > box[0] + 1e-6]
        if any(min(item[3], box[3]) > max(item[1], box[1]) + 1e-6 for item in active):
            return True
        active.append(box)
    return False


def reflow_hidden_component_sets(root_ids):
    visited = set()

    def visit(node_id):
        if node_id in visited or node_id not in nodes:
            return
        visited.add(node_id)
        node = nodes[node_id]
        for child_id in node['children']:
            visit(child_id)
        variants = [child_id for child_id in node['children'] if nodes[child_id]['visible']]
        # Hidden library sets can sit inside ordinary clipping frames.
        if any(nodes[child_id].get('previewSize') for child_id in variants):
            boxes = [transformed_bounds(nodes[child_id].get('previewMatrix', nodes[child_id]['matrix']), *nodes[child_id].get('previewSize', nodes[child_id]['size'])) for child_id in variants]
            left = min(0, *(box[0] for box in boxes))
            top = min(0, *(box[1] for box in boxes))
            if left < 0 or top < 0:
                for child_id in variants:
                    child = nodes[child_id]
                    matrix = child.get('previewMatrix', child['matrix'])
                    child['previewMatrix'] = matrix[:4] + [matrix[4] - left, matrix[5] - top]
            node['previewSize'] = [max(node['size'][0], *(box[2] for box in boxes)) - left, max(node['size'][1], *(box[3] for box in boxes)) - top]
            node['previewReflow'] = True
        if not node.get('isComponentSet') or len(variants) < 2 or not has_overlapping_nodes(variants):
            return
        local_bounds = []
        for child_id in variants:
            child = nodes[child_id]
            matrix = child['matrix'][:4] + [0, 0]
            local_bounds.append(transformed_bounds(matrix, *child.get('previewSize', child['size'])))
        cell_width = max(box[2] - box[0] for box in local_bounds)
        cell_height = max(box[3] - box[1] for box in local_bounds)
        padding, gap = 24.0, 16.0
        width, height = node.get('previewSize', node['size'])
        columns = max(1, min(len(variants), int((width - 2 * padding + gap) / max(1, cell_width + gap))))
        rows = (len(variants) + columns - 1) // columns
        for index, (child_id, box) in enumerate(zip(variants, local_bounds)):
            child = nodes[child_id]
            x = padding + (index % columns) * (cell_width + gap) + (cell_width - (box[2] - box[0])) / 2 - box[0]
            y = padding + (index // columns) * (cell_height + gap) + (cell_height - (box[3] - box[1])) / 2 - box[1]
            child['previewMatrix'] = child['matrix'][:4] + [x, y]
        node['previewSize'] = [max(width, 2 * padding + columns * cell_width + (columns - 1) * gap), max(height, 2 * padding + rows * cell_height + (rows - 1) * gap)]
        node['previewReflow'] = True

    for root_id in root_ids:
        visit(root_id)


def reflow_preview_page(spec):
    cards = []
    for root_id in spec['boardRoots']:
        node = nodes[root_id]
        width, height = node.get('previewSize', node['size'])
        label_width = max(150.0, len(node['name']) * 7.0 + 8.0)
        card_width = max(width, label_width)
        card_height = max(80.0, height + 48.0)
        node['previewCardWidth'] = card_width
        cards.append((node, card_width, card_height))

    cards.sort(key=lambda card: (
        -(card[1] * card[2]),
        -card[2],
        -card[1],
        card[0]['name'].casefold(),
        card[0]['id'],
    ))

    max_row_width = 3600.0
    column_gap = 96.0
    row_gap = 112.0
    x = 0.0
    y = 0.0
    row_height = 0.0
    for node, card_width, card_height in cards:
        if x and x + card_width > max_row_width:
            x = 0.0
            y += row_height + row_gap
            row_height = 0.0
        node['previewMatrix'] = node['matrix'][:4] + [x, y]
        x += card_width + column_gap
        row_height = max(row_height, card_height)


for spec in page_specs:
    if not spec['sourceVisible']:
        reflow_hidden_component_sets(spec['boardRoots'])
        if has_overlapping_nodes(spec['boardRoots']):
            reflow_preview_page(spec)


pages = []
for spec in page_specs:
    bounds = []
    for root_id in spec['boardRoots']:
        n = nodes[root_id]
        matrix = n.get('previewMatrix', n['matrix'])
        x, y = matrix[4], matrix[5]
        w, h = n.get('previewSize', n['size'])
        w = max(w, n.get('previewCardWidth', w))
        bounds.append((x, y, x + w, y + h))
    left = min(x[0] for x in bounds)
    top = min(x[1] for x in bounds)
    right = max(x[2] for x in bounds)
    bottom = max(x[3] for x in bounds)
    spec['bounds'] = [left - 48, top - 48, right - left + 96, bottom - top + 104]
    pages.append(spec)

for node_id, node in list(nodes.items()):
    modes = color_variables.modes_for(node_id, flat_nodes)
    nodes[node_id] = color_variables.resolve(node, modes)
    nodes[node_id]['colorModes'] = modes
    nodes[node_id]['localColorModes'] = color_variables.local_modes(node_id.rsplit('::', 1)[-1])

emoji_font_css, emoji_font_metrics = local_emoji_font()
FONT_FACE_CSS += emoji_font_css
payload = {'pages': pages, 'nodes': nodes, 'vectors': vectors, 'images': embedded_images, 'imagePaints': image_paints, 'glyphPaths': glyph_paths, 'colorVariables': color_variables.definitions, 'emojiFontMetrics': emoji_font_metrics}
json_text = json.dumps(payload, ensure_ascii=False, separators=(',', ':')).replace('</', '<\\/')

html = r'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>__SOURCE_NAME__ | Interactive design canvas</title>
<link rel="icon" href="data:,">
<style>@font-face{font-family:Geist;src:url("__GEIST_FONT__") format("woff2");font-style:normal;font-weight:100 900;font-display:swap}@font-face{font-family:"Geist Mono";src:url("__GEIST_MONO_FONT__") format("woff2");font-style:normal;font-weight:100 900;font-display:swap}__EXTRA_FONT_FACES__</style>
<style>
:root{color-scheme:light;--ink:#252a30;--muted:#7b818b;--line:#e5e7eb;--soft:#f7f8fa;--accent:#5669e8;--accent-soft:#eef0ff;--canvas:#f0f1f4;--left:258px;--right:282px}*{box-sizing:border-box}html,body{height:100%;margin:0;overflow:hidden;background:#fff;color:var(--ink);font:13px/1.4 Inter,Geist,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}button,input{font:inherit;color:inherit}button{cursor:pointer}.topbar{height:48px;display:flex;align-items:center;gap:14px;padding:0 14px;border-bottom:1px solid var(--line);background:#fff;position:relative;z-index:2}.brand{display:flex;align-items:center;gap:9px;font-size:13px;font-weight:650;white-space:nowrap}.mark{width:19px;height:19px;border-radius:5px;background:var(--accent);color:white;display:grid;place-items:center;font-size:11px;font-weight:700}.divider{height:22px;border-left:1px solid var(--line)}.page-tabs{display:flex;height:100%;align-items:center;gap:3px;overflow:auto}.page-tab{height:32px;border:0;border-radius:6px;background:transparent;padding:0 10px;color:#626976;white-space:nowrap}.page-tab:hover{background:#f4f5f8}.page-tab.active{background:var(--accent-soft);color:#3e50ca;font-weight:600}.layout{height:calc(100% - 48px);display:grid;grid-template-columns:var(--left) minmax(260px,1fr) var(--right)}.sidebar{min-width:0;background:#fff;display:flex;flex-direction:column;overflow:hidden}.left-panel{border-right:1px solid var(--line)}.right-panel{border-left:1px solid var(--line)}.section-head{height:38px;display:flex;align-items:center;justify-content:space-between;padding:0 12px;font-size:11px;font-weight:650;letter-spacing:.045em;text-transform:uppercase;color:#616772;border-bottom:1px solid #f0f1f3;flex:none}.section-head small{font-size:10px;color:#969ba4;font-weight:500;letter-spacing:0;text-transform:none}.screen-search,.layer-search{margin:9px 9px 6px;height:30px;border:1px solid #e6e8ec;border-radius:6px;background:#fff;padding:0 9px;outline:0;font-size:11px;flex:none}.screen-search:focus,.layer-search:focus{border-color:#aab2fa;box-shadow:0 0 0 2px #eef0ff}.screen-list{overflow:auto;max-height:38%;padding:0 5px 10px}.screen-row{display:flex;width:100%;align-items:center;text-align:left;gap:8px;border:0;background:transparent;border-radius:5px;padding:6px 7px;color:#434852;font-size:11px}.screen-row:hover,.layer-label:hover{background:#f5f6f8}.screen-row.selected{background:#eef0ff;color:#4052ce}.frame-glyph{flex:none;width:14px;height:11px;border:1.4px solid currentColor;border-radius:2px;opacity:.8}.screen-row-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}.screen-row-id{font-size:9px;color:#989da6;font-variant-numeric:tabular-nums}.left-divider{height:1px;background:var(--line);flex:none}.layer-area{display:flex;min-height:0;flex:1;flex-direction:column}.tree-hint{padding:10px 12px;color:#8b909a;font-size:11px}.layer-tree{min-height:0;overflow:auto;padding:0 5px 10px}.layer-item{min-width:0}.layer-row{display:flex;align-items:center;min-height:25px;gap:2px;padding-right:4px;border-radius:4px}.layer-row.selected{background:#edf0ff;color:#384cce}.disclosure{flex:none;width:17px;height:20px;display:grid;place-items:center;border:0;background:transparent;color:#8c919a;font-size:10px;padding:0}.disclosure.empty{visibility:hidden}.layer-label{display:flex;align-items:center;min-width:0;flex:1;gap:6px;border:0;background:transparent;text-align:left;padding:3px 4px;border-radius:4px;font-size:10.5px}.type-icon{width:14px;flex:none;text-align:center;color:#9096a0;font-size:9px;font-weight:650}.layer-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.hidden-node .layer-name{opacity:.48}.layer-count{margin-left:auto;color:#9da2ab;font-size:9px}.workspace{position:relative;min-width:0;min-height:0;background-color:var(--canvas);background-image:radial-gradient(#cbd0d9 0.7px,transparent 0.7px);background-size:16px 16px;overflow:hidden}.canvas-toolbar{position:absolute;z-index:1;top:12px;left:50%;transform:translateX(-50%);height:36px;display:flex;align-items:center;gap:3px;padding:3px;background:#fff;border:1px solid #e4e6ea;border-radius:8px;box-shadow:0 2px 8px #20263112}.tool-btn{width:28px;height:28px;border:0;border-radius:5px;background:transparent;color:#525965;font-size:16px;display:grid;place-items:center}.tool-btn:hover{background:#f0f1f4}.zoom-label{min-width:45px;text-align:center;font-size:10px;color:#6d737e;font-variant-numeric:tabular-nums}.tool-sep{height:18px;border-left:1px solid #e9eaed;margin:0 2px}.canvas-svg{position:absolute;inset:0;width:100%;height:100%;touch-action:none;user-select:none}.canvas-svg .design-node{cursor:default}.canvas-svg .selected-outline{fill:none;stroke:#5367e8;stroke-width:2;vector-effect:non-scaling-stroke;pointer-events:none}.canvas-svg .screen-label{font:11px Geist,Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;fill:#4a505a}.canvas-svg .screen-id{font:9px Geist,Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;fill:#8a9099}.inspector-title{padding:12px 12px 10px;border-bottom:1px solid #f0f1f3}.inspector-name{font-size:13px;font-weight:620;word-break:break-word}.inspector-kind{margin-top:5px;color:#8b909a;font-size:10px}.inspector-body{padding:11px 12px;overflow:auto}.inspector-empty{padding:18px 12px;color:#888e98;font-size:11px;line-height:1.6}.prop-group{margin:0 0 15px}.prop-heading{margin-bottom:7px;color:#777d87;font-size:10px;font-weight:650;text-transform:uppercase;letter-spacing:.045em}.prop-grid{display:grid;grid-template-columns:1fr 1fr;gap:7px}.prop{min-width:0;border:1px solid #eceef1;border-radius:5px;padding:6px 7px}.prop span{display:block;color:#9297a0;font-size:9px}.prop strong{display:block;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:10px;font-weight:550;font-variant-numeric:tabular-nums}.swatches{display:flex;flex-wrap:wrap;gap:6px}.swatch{width:17px;height:17px;border:1px solid #0002;border-radius:4px}.text-sample{max-height:130px;overflow:auto;background:#f7f8fa;border-radius:5px;padding:8px;font-size:10px;white-space:pre-wrap;word-break:break-word}.pathline{color:#838994;font-size:10px;line-height:1.6;word-break:break-word}.no-results{padding:12px;color:#969ba3;font-size:10px}.canvas-svg text{user-select:none}.hidden{display:none!important}@media(max-width:980px){:root{--left:220px;--right:238px}}@media(max-width:760px){:root{--left:205px;--right:0px}.right-panel{display:none}.page-tab{padding:0 7px;font-size:11px}}
</style>
<style>
.css-panel{margin:0 0 15px;border:1px solid #e6e8ec;border-radius:6px;overflow:hidden;background:#fafbfc}.css-panel-head{height:30px;display:flex;align-items:center;justify-content:space-between;padding:0 8px;border-bottom:1px solid #e8eaee;color:#777d87;font-size:10px;font-weight:650;letter-spacing:.045em;text-transform:uppercase}.css-copy{border:0;background:transparent;color:#5966c7;font-size:10px;padding:3px 4px;border-radius:4px}.css-copy:hover{background:#eef0ff}.css-code{margin:0;max-height:245px;overflow:auto;padding:9px;color:#343942;font:10px/1.55 ui-monospace,SFMono-Regular,Menlo,monospace;white-space:pre}
</style>
</head>
<body>
<header class="topbar"><div class="brand"><span class="mark">F</span>__SOURCE_NAME__</div><span class="divider"></span><nav id="pageTabs" class="page-tabs" aria-label="Figma pages"></nav></header>
<div class="layout">
  <aside class="sidebar left-panel">
    <div class="section-head"><span>Screens</span><small id="screenCount"></small></div>
    <input id="screenSearch" class="screen-search" type="search" placeholder="Filter screens" aria-label="Filter screens">
    <div id="screenList" class="screen-list"></div>
    <div class="left-divider"></div>
    <div class="layer-area"><div class="section-head"><span>Layers</span><small id="layerScope"></small></div><input id="layerSearch" class="layer-search" type="search" placeholder="Search layers" aria-label="Search layers"><div id="layerTree" class="layer-tree"></div></div>
  </aside>
  <main class="workspace" id="workspace">
    <div class="canvas-toolbar" aria-label="Canvas controls"><button class="tool-btn" id="zoomOut" title="Zoom out" aria-label="Zoom out">−</button><span class="zoom-label" id="zoomLabel">100%</span><button class="tool-btn" id="zoomIn" title="Zoom in" aria-label="Zoom in">+</button><span class="tool-sep"></span><button class="tool-btn" id="fitCanvas" title="Fit page" aria-label="Fit page">⤢</button><button class="tool-btn" id="focusSelection" title="Focus selection, shortcut 2" aria-label="Focus selection">⌖</button></div>
    <svg id="canvas" class="canvas-svg" xmlns="http://www.w3.org/2000/svg" role="application" aria-label="Interactive design canvas"><g id="world"></g></svg>
  </main>
  <aside class="sidebar right-panel"><div class="section-head"><span>Design</span><small>selection</small></div><div id="inspector"></div></aside>
</div>
<script>
const DATA = __PAYLOAD__;
const NS='http://www.w3.org/2000/svg';
const nodes=DATA.nodes;
const byId=id=>nodes[id];
const svg=document.getElementById('canvas');
const world=document.getElementById('world');
const pageTabs=document.getElementById('pageTabs');
const screenList=document.getElementById('screenList');
const layerTree=document.getElementById('layerTree');
const inspector=document.getElementById('inspector');
const screenSearch=document.getElementById('screenSearch');
const layerSearch=document.getElementById('layerSearch');
const NSVG=NS;
let pageIndex=0;
let page=DATA.pages[0];
let selectedId=null;
let selectedRoot=null;
let zoom=1;
let panX=0,panY=0;
let targetZoom=1;
let targetPanX=0,targetPanY=0;
let cameraFrame=0;
let spaceDown=false;
let drag=null;
let suppressClick=false;
let openNodes=new Set();
let rootMap=new Map();
const el=(tag,attrs={})=>{const node=document.createElementNS(NSVG,tag);for(const [key,value] of Object.entries(attrs)){if(value!==undefined&&value!==null)node.setAttribute(key,String(value))}return node};
const html=(tag,attrs={},content='')=>{const node=document.createElement(tag);for(const [key,value] of Object.entries(attrs)){if(key==='class')node.className=value;else if(key==='text')node.textContent=value;else node.setAttribute(key,String(value))}if(content)node.textContent=content;return node};
const safeId=id=>String(id).replace(/[^a-zA-Z0-9_-]/g,'_');
const renderId=(id,scope='')=>scope?`${safeId(scope)}_${safeId(id)}`:safeId(id);
let renderCloneCounter=0;
function color(c,alpha=1){if(!c)return 'none';const rgb=c.slice(0,3).map(v=>Math.max(0,Math.min(255,Math.round(v*255))));const a=Math.max(0,Math.min(1,(c[3]??1)*alpha));return `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${a})`}
function imagePaintUri(paint){return DATA.imagePaints?.[paint.renderHash]||DATA.images[paint.hash]}
function imageFilterCss(filter){filter=filter||{};const f=[];const num=value=>Number.isFinite(Number(value))?Number(value):0;const tint=num(filter.tint),temperature=num(filter.temperature),shadows=num(filter.shadows),highlights=num(filter.highlights),exposure=num(filter.exposure),vibrance=num(filter.vibrance),contrast=num(filter.contrast);if(tint)f.push(`hue-rotate(${tint*90}deg)`);if(temperature)f.push(`sepia(${Math.min(1,Math.abs(temperature)*.25)})`,`hue-rotate(${temperature>0?-temperature*18:Math.abs(temperature)*18}deg)`);const brightness=Math.max(0,Math.pow(2,exposure)*(1+shadows*.15-highlights*.15));if(brightness!==1)f.push(`brightness(${brightness})`);if(contrast)f.push(`contrast(${Math.max(0,1+contrast)})`);if(vibrance)f.push(`saturate(${Math.max(0,1+vibrance)})`);return f.join(' ')||'none'}
function svgMatrix(m){return `matrix(${m.join(' ')})`}
function imageContentTransform(m,w,h,mode){
 if(mode!=='STRETCH'||!Array.isArray(m)||m.length<6||!(w>0&&h>0))return undefined;
 const [a,b,c,d,e,f]=m,det=a*d-b*c;
 if(!Number.isFinite(det)||Math.abs(det)<1e-12)return undefined;
 const ia=d/det,ib=-b/det,ic=-c/det,id=a/det,ie=(c*f-d*e)/det,iff=(b*e-a*f)/det;
 return `matrix(${ia} ${ib*h/w} ${ic*w/h} ${id} ${ie*w} ${iff*h})`
}
function pathViewTransform(path,data){
 if(!path.viewBox)return undefined;
 const viewBox=path.viewBox.map(Number),base=data.viewBox.map(Number);
 if(viewBox.length<4||base.length<4||!viewBox[2]||!viewBox[3])return undefined;
 const scaleX=base[2]/viewBox[2],scaleY=base[3]/viewBox[3];
 const x=base[0]-viewBox[0]*scaleX,y=base[1]-viewBox[1]*scaleY;
 return `matrix(${scaleX} 0 0 ${scaleY} ${x} ${y})`;
}
function normalizeOverrideTransform(target,transform){
 if(!transform||!target?.matrix)return transform;
 const geometry=transform,node=target.matrix;
 if([0,1,2,3].some(index=>Math.abs(geometry[index]-node[index])>1e-4))return geometry;
 const [a,b,c,d,e,f]=node,determinant=a*d-b*c;if(Math.abs(determinant)<1e-9)return geometry;
 const inverse=[d/determinant,-b/determinant,-c/determinant,a/determinant,(c*f-d*e)/determinant,(b*e-a*f)/determinant];
 const relative=mul(inverse,geometry),identity=[1,0,0,1,0,0];
 return relative.every((value,index)=>Math.abs(value-identity[index])<=1e-4)?null:relative;
}
function vectorPathTransform(path,data,node){
 if(path.sourceSize){
  const source=path.sourceSize,sx=source[0]?node.size[0]/source[0]:1,sy=source[1]?node.size[1]/source[1]:1,scale=[sx,0,0,sy,0,0];
  return svgMatrix(path.transform?mul(path.transform,scale):scale);
 }
 return path.transform?svgMatrix(path.transform):pathViewTransform(path,data);
}
function vectorGeometryForOverride(target,override){
 const fills=override.fillGeometry||[],strokes=override.strokeGeometry||[];
 if(!(fills.length||strokes.length)||!target||target.type==='TEXT')return null;
 const first=fills[0]||strokes[0];
 const base=target.vectorGeometry?.paths?.length?target.vectorGeometry:(target.vector!=null?DATA.vectors[String(target.vector)]:null);
 const hasFill=(target.fills||[]).some(item=>item.visible),hasStroke=(target.strokes||[]).some(item=>item.visible);
 const isStrokePath=item=>item.paintMode==='strokeGeometry'||item.networkStrokeIndex!==undefined||item.strokeIndex!==undefined||(!hasFill&&hasStroke&&item.fill!=='none');
 const isFillPath=item=>item.paintMode==='fill'||item.fillIndex!==undefined||(!isStrokePath(item)&&item.fill!=='none');
 const paths=(base?.paths||[]).filter(item=>!(fills.length&&isFillPath(item))&&!(strokes.length&&isStrokePath(item))).map(item=>{
  if(hasFill||!hasStroke||item.networkStrokeIndex!==undefined||item.strokeIndex!==undefined)return item;
  return {...item,fill:'none',networkStrokeIndex:0,viewBox:base.viewBox};
 });
 fills.forEach(item=>paths.push({d:item.path,fill:'currentColor',stroke:'none',fillRule:(item.windingRule||'NONZERO').toLowerCase(),paintMode:'fill',transform:override.nodeTransform?undefined:normalizeOverrideTransform(target,item.transform),viewBox:item.viewBox,sourceSize:item.size||target.size,paintOverrides:{fills:override.fills||[],strokes:override.strokes||[]}}));
 strokes.forEach(item=>paths.push({d:item.path,fill:'none',stroke:'currentColor',paintMode:'strokeGeometry',transform:override.nodeTransform?undefined:normalizeOverrideTransform(target,item.transform),viewBox:item.viewBox,sourceSize:item.size||target.size,paintOverrides:{fills:override.fills||[],strokes:override.strokes||[]}}));
 return {viewBox:base?.viewBox||first.viewBox,paths};
}
function hasVectorDrawable(n){
 return Boolean(n.vectorGeometry?.paths?.length||(n.type==='VECTOR'&&n.vector!=null&&DATA.vectors[String(n.vector)]?.paths?.length));
}
function vectorElement(n,options){
 const data=n.vectorGeometry?.paths?.length?n.vectorGeometry:DATA.vectors[String(n.vector)];
 const [width,height]=n.size;
 const icon=el('svg',{x:0,y:0,width:width>0?width:1,height:height>0?height:1,viewBox:data.viewBox.join(' '),preserveAspectRatio:'none',overflow:'visible'});
 const fillIndices=n.fills.map((item,index)=>item.visible?index:-1).filter(index=>index>=0);
 const defaultPaint=fillIndices.length?n.fills[fillIndices[0]]:null;
 const mainFill=defaultPaint?vectorPaintRef(n,defaultPaint,n.fills.indexOf(defaultPaint),defsRoot,options.renderScope||''):'currentColor';
 const strokeOnly=!defaultPaint&&n.strokes.some(item=>item.visible);
 const fillGeometryPaths=data.paths.filter(path=>path.paintMode==='fill');
 const strokeGeometryPaths=data.paths.filter(path=>path.paintMode==='strokeGeometry');
 let strokeClipId=null,strokeMaskId=null;
 if(fillGeometryPaths.length&&strokeGeometryPaths.length&&(n.strokeAlign==='INSIDE'||n.strokeAlign==='OUTSIDE')){
  const [x,y,w,h]=data.viewBox.map(Number),pad=Math.max(1,Math.abs(w),Math.abs(h),Number(n.strokeWeight||0)*4);
  const defs=el('defs');
  const appendGeometry=(parent,path,fill)=>parent.append(el('path',{d:path.d,transform:vectorPathTransform(path,data,n),'fill-rule':path.fillRule,fill}));
  if(n.strokeAlign==='INSIDE'){
   strokeClipId=renderId(`stroke-clip-${n.id}-${++renderCloneCounter}`,options.renderScope||'');
   const clip=el('clipPath',{id:strokeClipId,clipPathUnits:'userSpaceOnUse'});
   fillGeometryPaths.forEach(path=>appendGeometry(clip,path,'white'));
   defs.append(clip);
  }else{
   strokeMaskId=renderId(`stroke-mask-${n.id}-${++renderCloneCounter}`,options.renderScope||'');
   const mask=el('mask',{id:strokeMaskId,maskUnits:'userSpaceOnUse',x:x-pad,y:y-pad,width:w+2*pad,height:h+2*pad});
   mask.append(el('rect',{x:x-pad,y:y-pad,width:w+2*pad,height:h+2*pad,fill:'black'}));
   strokeGeometryPaths.forEach(path=>appendGeometry(mask,path,'white'));
   fillGeometryPaths.forEach(path=>appendGeometry(mask,path,'black'));
   defs.append(mask);
  }
  icon.append(defs);
 }
 for(const path of data.paths){
  if(path.fillIndex!==undefined&&!n.fills[path.fillIndex]?.visible)continue;
  if(path.strokeIndex!==undefined&&!n.strokes[path.strokeIndex]?.visible)continue;
  const transform=vectorPathTransform(path,data,n);
  if(path.networkStrokeIndex!==undefined){
   const stroke=n.strokes[path.networkStrokeIndex]||n.strokes[0];
   const element=el('path',{d:path.d,transform,fill:'none',stroke:vectorPaintRef(n,stroke,path.networkStrokeIndex,defsRoot,options.renderScope||'','stroke'),'stroke-width':n.strokeWeight||1,'stroke-linecap':({ROUND:'round',SQUARE:'square',NONE:'butt'}[n.strokeCap]||'butt'),'stroke-linejoin':(n.strokeJoin||'MITER').toLowerCase()});element.style.mixBlendMode=blendMode(stroke?.blendMode);icon.append(element);
   continue;
  }
  if(path.paintMode==='fill'||(path.fill!=='none'&&path.fill==='currentColor'&&fillIndices.length)){
   const paints=vectorPathPaints(n,path,'fill');for(let index=0;index<paints.length;index++){const paint=paints[index];if(!paint.visible)continue;const element=el('path',{d:path.d,transform,'fill-rule':path.fillRule,fill:vectorPaintRef(n,paint,index,defsRoot,options.renderScope||''),stroke:'none'});element.style.mixBlendMode=blendMode(paint.blendMode);icon.append(element)}
   continue;
  }
  if(path.paintMode==='strokeGeometry'){
   const alignment=strokeMaskId?`url(#${strokeMaskId})`:strokeClipId?`url(#${strokeClipId})`:undefined;
   const paints=vectorPathPaints(n,path,'stroke');for(let index=0;index<paints.length;index++){const paint=paints[index];if(!paint.visible)continue;const element=el('path',{d:path.d,transform,'fill-rule':path.fillRule,fill:vectorPaintRef(n,paint,index,defsRoot,options.renderScope||'','stroke'),stroke:'none',mask:strokeMaskId?alignment:undefined,'clip-path':strokeClipId?alignment:undefined});element.style.mixBlendMode=blendMode(paint.blendMode);icon.append(element)}
   continue;
  }
  let fill,stroke=path.stroke==='currentColor'?mainFill:path.stroke,strokeWidth=path.strokeWidth;
  if(path.strokeIndex!==undefined){
   fill=vectorPaintRef(n,n.strokes[path.strokeIndex],path.strokeIndex,defsRoot,options.renderScope||'','stroke');
   stroke='none';
  }else if(path.fillIndex!==undefined)fill=vectorPaintRef(n,n.fills[path.fillIndex],path.fillIndex,defsRoot,options.renderScope||'');
  else if(strokeOnly){
   fill='none';
   stroke=vectorPaintRef(n,n.strokes[0],0,defsRoot,options.renderScope||'','stroke');
   strokeWidth=n.strokeWeight||1;
  }else if(path.fill==='none')fill='none';
  else if(defaultPaint)fill=mainFill;
  else fill=path.fill||'currentColor';
  const element=el('path',{d:path.d,transform,'fill-rule':path.fillRule,fill,stroke,'stroke-width':strokeWidth,'stroke-linecap':({ROUND:'round',SQUARE:'square',NONE:'butt'}[n.strokeCap]||'butt'),'stroke-linejoin':(n.strokeJoin||'MITER').toLowerCase()});const paint=path.strokeIndex!==undefined?n.strokes[path.strokeIndex]:path.fillIndex!==undefined?n.fills[path.fillIndex]:null;element.style.mixBlendMode=blendMode(paint?.blendMode);icon.append(element);
 }
 return icon;
}
function derivedGeometryElement(n,options){
 const source=n.derivedGeometrySourceSize||n.size,[width,height]=n.size,sx=width/(source[0]||width||1),sy=height/(source[1]||height||1),group=el('g',{transform:`scale(${sx} ${sy})`});
 for(const path of n.derivedGeometry||[]){
  const slot=path.paintMode==='fill'?'fills':'strokes',fallback=n.derivedGeometryPaints?.[slot]||[],overrides=path.paintOverrides?.[slot]||[],paints=overrides.length?overrides:fallback;
  for(let index=0;index<paints.length;index++){
   const paint=paints[index];if(!paint.visible)continue;
   const element=el('path',{d:path.d,transform:path.transform?svgMatrix(path.transform):undefined,'fill-rule':path.fillRule||'nonzero',fill:vectorPaintRef(n,paint,index,defsRoot,options.renderScope||'',slot==='strokes'?'stroke':'fill'),stroke:'none'});
   element.style.mixBlendMode=blendMode(paint.blendMode);group.append(element);
  }
 }
 return group;
}
function cornerValues(n,w,h){const raw=n.cornerRadii?.length===4?n.cornerRadii:Array(4).fill(n.cornerRadius||0);return raw.map(value=>Math.max(0,Math.min(value||0,w/2,h/2)))}
function roundedPath(w,h,r){const [tl,tr,br,bl]=r;return `M ${tl} 0 H ${w-tr} A ${tr} ${tr} 0 0 1 ${w} ${tr} V ${h-br} A ${br} ${br} 0 0 1 ${w-br} ${h} H ${bl} A ${bl} ${bl} 0 0 1 0 ${h-bl} V ${tl} A ${tl} ${tl} 0 0 1 ${tl} 0 Z`}
function makeClip(id,w,h,n){
 const cp=el('clipPath',{id,clipPathUnits:'userSpaceOnUse'});
 const data=n.vectorGeometry,paths=['VECTOR','BOOLEAN_OPERATION'].includes(n.type)?(data?.paths||[]).filter(path=>path.paintMode==='fill'||path.fillIndex!==undefined||(path.fill&&path.fill!=='none')):[];
 if(paths.length){
  paths.forEach(path=>cp.append(el('path',{d:path.d,transform:vectorPathTransform(path,data,n),'fill-rule':path.fillRule||'nonzero'})));
 }else if(n.type==='ELLIPSE')cp.append(el('ellipse',{cx:w/2,cy:h/2,rx:w/2,ry:h/2}));
 else{const radii=cornerValues(n,w,h);cp.append(radii.every(value=>value===radii[0])?el('rect',{width:w,height:h,rx:radii[0]||undefined}):el('path',{d:roundedPath(w,h,radii)}))}
 return cp;
}
function shapeFor(n,fill,strokeColor=null,strokeWidth=n.strokeWeight||1){
 const [w,h]=n.size;
 if(!(n.type==='LINE'?w>=0&&h>=0:w>0&&h>=0))return null;
 const width=Math.max(0,Number(strokeWidth)||0);
 let offset=0;
 if(strokeColor&&n.strokeAlign==='INSIDE')offset=width/2;
 else if(strokeColor&&n.strokeAlign==='OUTSIDE')offset=-width/2;
 const sw=Math.max(0,w-2*offset),sh=Math.max(0,h-2*offset);
 let shape;
 if(n.type==='ELLIPSE')shape=el('ellipse',{cx:w/2,cy:h/2,rx:sw/2,ry:sh/2});
 else if(n.type==='LINE')shape=el('line',{x1:0,y1:0,x2:w,y2:h});
 else{
  const radii=cornerValues(n,w,h).map(value=>Math.max(0,Math.min(value-offset,sw/2,sh/2)));
  if(radii.every(value=>value===radii[0]))shape=el('rect',{x:offset,y:offset,width:sw,height:sh,rx:radii[0]||undefined});
  else shape=el('path',{d:roundedPath(sw,sh,radii),transform:offset?`translate(${offset} ${offset})`:undefined});
 }
 if(fill!==undefined)shape.setAttribute('fill',fill);
 if(strokeColor){
  shape.setAttribute('stroke',strokeColor);
  shape.setAttribute('stroke-width',width);
  shape.setAttribute('stroke-linecap',({ROUND:'round',SQUARE:'square',NONE:'butt'}[n.strokeCap]||'butt'));
  shape.setAttribute('stroke-linejoin',(n.strokeJoin||'MITER').toLowerCase());
  if(n.dashPattern?.length)shape.setAttribute('stroke-dasharray',n.dashPattern.join(' '));
 }else if(n.type==='LINE'){
  shape.setAttribute('fill','none');
  shape.setAttribute('stroke','#20232a');
  shape.setAttribute('stroke-width',width);
 }
 return shape;
}
function maskClipPath(id,n){
 const clip=el('clipPath',{id,clipPathUnits:'userSpaceOnUse',transform:svgMatrix(n.matrix)}),data=n.vectorGeometry?.paths?.length?n.vectorGeometry:(n.vector!=null?DATA.vectors[String(n.vector)]:null);
 if(data?.paths?.length){
  for(const path of data.paths){
   if(path.paintMode==='strokeGeometry'||path.strokeIndex!==undefined||path.networkStrokeIndex!==undefined||path.fill==='none'||(path.fillIndex!==undefined&&!n.fills[path.fillIndex]?.visible))continue;
   clip.append(el('path',{d:path.d,transform:vectorPathTransform(path,data,n),'fill-rule':path.fillRule||'nonzero'}));
  }
 }else{
  const shape=shapeFor(n,'white');if(shape)clip.append(shape);
 }
 return clip;
}
function paintedMask(id,n,options){
 const mask=el('mask',{id,maskUnits:'userSpaceOnUse',maskContentUnits:'userSpaceOnUse','mask-type':n.maskType==='LUMINANCE'?'luminance':'alpha'}),content=el('g');
 mask.append(content);defsRoot.append(mask);
 const overrides={...options.overrides,[n.id]:{...options.overrides?.[n.id],isMask:false}};
 renderNode(n.id,content,{...options,visualOnly:true,ignoreTransform:false,matrixOverride:null,overrides,renderScope:id});
 const bounds=content.getBBox(),outset=Math.max(1,n.strokeWeight||0,...(n.effects||[]).filter(effect=>effect.visible).map(effect=>2*(effect.radius||0)+Math.abs(effect.spread||0)+Math.max(...(effect.offset||[0,0]).map(Math.abs))));
 mask.setAttribute('x',bounds.x-outset);mask.setAttribute('y',bounds.y-outset);
 mask.setAttribute('width',Math.max(1,bounds.width+2*outset));mask.setAttribute('height',Math.max(1,bounds.height+2*outset));
 return mask;
}
function blendMode(mode){return ({NORMAL:'normal',DARKEN:'darken',MULTIPLY:'multiply',LINEAR_BURN:'plus-darker',COLOR_BURN:'color-burn',LIGHTEN:'lighten',SCREEN:'screen',COLOR_DODGE:'color-dodge',LINEAR_DODGE:'plus-lighter',OVERLAY:'overlay',SOFT_LIGHT:'soft-light',HARD_LIGHT:'hard-light',DIFFERENCE:'difference',EXCLUSION:'exclusion',HUE:'hue',SATURATION:'saturation',COLOR:'color',LUMINOSITY:'luminosity'})[mode]||'normal'}
function effectFilter(id,effect,defs,kind){
 const filter=el('filter',{id,x:'-100%',y:'-100%',width:'300%',height:'300%','color-interpolation-filters':'sRGB'});
 const [dx,dy]=effect.offset||[0,0],sigma=Math.max(0,effect.radius||0)/2;
 if(kind==='shadow'){
  let source='SourceAlpha';
  if(effect.spread){filter.append(el('feMorphology',{in:source,operator:effect.spread>0?'dilate':'erode',radius:Math.abs(effect.spread),result:'spread'}));source='spread'}
  filter.append(el('feOffset',{in:source,dx,dy,result:'offset'}));
  filter.append(el('feGaussianBlur',{in:'offset',stdDeviation:sigma,result:'blurred'}));
  filter.append(el('feColorMatrix',{in:'SourceAlpha',type:'matrix',values:'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',result:'hard-alpha'}));
  filter.append(el('feComposite',{in:'blurred',in2:'hard-alpha',operator:'out',result:'outer-shadow'}));
  filter.append(el('feFlood',{'flood-color':color(effect.color?.slice(0,3).concat(1)),'flood-opacity':effect.color?.[3]??1,result:'shadow-color'}));
  filter.append(el('feComposite',{in:'shadow-color',in2:'outer-shadow',operator:'in',result:'shadow'}));
 }else if(kind==='inner'){
  filter.append(el('feGaussianBlur',{in:'SourceAlpha',stdDeviation:sigma,result:'blurred'}));
  filter.append(el('feOffset',{in:'blurred',dx,dy,result:'offset'}));
  filter.append(el('feComposite',{in:'SourceAlpha',in2:'offset',operator:'out',result:'inner-mask'}));
  filter.append(el('feFlood',{'flood-color':color(effect.color?.slice(0,3).concat(1)),'flood-opacity':effect.color?.[3]??1,result:'inner-color'}));
  filter.append(el('feComposite',{in:'inner-color',in2:'inner-mask',operator:'in',result:'inner-shadow'}));
  const merge=el('feMerge');merge.append(el('feMergeNode',{in:'SourceGraphic'}),el('feMergeNode',{in:'inner-shadow'}));filter.append(merge);
 }else filter.append(el('feGaussianBlur',{in:'SourceGraphic',stdDeviation:sigma}));
 defs.append(filter);return id;
}
function backgroundBlurElement(n,effect,options){
 const radius=Math.max(0,Number(effect.radius)||0),[width,height]=n.size;
 if(!radius||!(width>0&&height>0))return null;
 const hasStroke=(n.strokes||[]).some(paint=>paint.visible&&(paint.opacity??1)>0&&(paint.color?.[3]??1)>0);
 const strokeOutset=hasStroke?Number(n.strokeWeight||0)*(n.strokeAlign==='OUTSIDE'?1:n.strokeAlign==='CENTER'?.5:0):0;
 const pad=radius+Math.max(0,strokeOutset),id=renderId(`backdrop_${n.id}_${++renderCloneCounter}`,options.renderScope||'');
 const clip=makeClip(id,width,height,n);clip.setAttribute('transform',`translate(${pad} ${pad})`);defsRoot.append(clip);
 const foreignObject=el('foreignObject',{x:-pad,y:-pad,width:width+2*pad,height:height+2*pad,'pointer-events':'none'});
 const surface=document.createElementNS('http://www.w3.org/1999/xhtml','div');
 surface.style.backdropFilter=`blur(${radius/2}px)`;surface.style.clipPath=`url(#${id})`;surface.style.width='100%';surface.style.height='100%';
 foreignObject.append(surface);return foreignObject;
}
function paintReference(n,paint,index,defs,scope=''){
 if(!paint.visible)return null;
 let fill='none';
 if(paint.type==='SOLID')fill=color(paint.color,paint.opacity);else if(paint.type==='GRADIENT_LINEAR'||paint.type==='GRADIENT_RADIAL'){
  const id=`grad_${renderId(n.id,scope)}_${index}`;
  const t=paint.transform||[1,0,0,1,0,0];
            const p0x=t[4],p0y=t[5]+.5,p1x=t[0]+t[4],p1y=t[1]+t[5]+.5;
  const handles=paint.handles||[];let attrs={id,gradientUnits:'objectBoundingBox'};
  if(paint.type==='GRADIENT_RADIAL'){attrs={...attrs,cx:.5,cy:.5,r:.5};if(handles.length>=3){const [cx,cy]=handles[0],[x2,y2]=handles[1],[x3,y3]=handles[2],ax=x3-cx,ay=y3-cy,bx=x2-cx,by=y2-cy;attrs.gradientTransform=`matrix(${2*ax} ${2*ay} ${2*bx} ${2*by} ${cx-ax-bx} ${cy-ay-by})`}}
  else if(handles.length>=2){attrs={...attrs,x1:handles[0][0],y1:handles[0][1],x2:handles[1][0],y2:handles[1][1]}}
  else{attrs={...attrs,x1:p0x,y1:p0y,x2:p1x,y2:p1y}}
  let gradient=defs.querySelector(`#${id}`);if(!gradient){gradient=el(paint.type==='GRADIENT_RADIAL'?'radialGradient':'linearGradient',attrs);for(const stop of paint.stops||[]){gradient.append(el('stop',{offset:stop.position,'stop-color':color(stop.color,paint.opacity)}))}defs.append(gradient)}fill=`url(#${id})`;
}else if(paint.type==='PATTERN'){
  const source=byId(paint.sourceNode);if(!source)return null;const scale=Math.max(.001,Number(paint.scale)||1),spacing=paint.patternSpacing||[0,0],width=Math.max(1,source.size[0]*scale+Number(spacing[0]||0)),height=Math.max(1,source.size[1]*scale+Number(spacing[1]||0));const id=`pattern_${renderId(n.id,scope)}_${index}`;const pattern=el('pattern',{id,x:0,y:0,width,height,patternUnits:'userSpaceOnUse'});const content=el('g',{transform:`scale(${scale})`});pattern.append(content);defs.append(pattern);renderNode(source.id,content,{visualOnly:true,ignoreTransform:true,renderScope:`${scope}_pattern_${index}`,colorModes:n.colorModes});fill=`url(#${id})`;
}else return null;
 return fill;
}
function fillNode(n,paint,index,defs,scope=''){
 const [w,h]=n.size;if(!paint.visible)return null;
 if(paint.type==='IMAGE'){
  const uri=imagePaintUri(paint);if(!uri)return null;
  const id=`clip_${renderId(n.id,scope)}_${index}`;defs.append(makeClip(id,w,h,n));
  const mode=paint.mode==='STRETCH'?'none':paint.mode==='FIT'?'xMidYMid meet':'xMidYMid slice';
  const group=el('g',{'clip-path':`url(#${id})`}),image=el('image',{x:0,y:0,width:w,height:h,href:uri,preserveAspectRatio:mode,opacity:paint.opacity,transform:imageContentTransform(paint.transform,w,h,paint.mode)});image.style.mixBlendMode=blendMode(paint.blendMode);image.style.filter=paint.renderHash?'none':imageFilterCss(paint.paintFilter);group.append(image);return group;
}
 const fill=paintReference(n,paint,index,defs,scope);
 if(fill===null)return null;
 const shape=shapeFor(n,fill);if(shape)shape.style.mixBlendMode=blendMode(paint.blendMode);return shape;
}
function vectorImageRef(n,paint,index,defs,scope=''){const uri=imagePaintUri(paint);if(!uri)return null;const [w,h]=n.size,id=`image_${renderId(n.id,scope)}_${index}`,width=Math.max(1,w),height=Math.max(1,h),pattern=el('pattern',{id,x:0,y:0,width,height,patternUnits:'userSpaceOnUse'}),mode=paint.mode==='STRETCH'?'none':paint.mode==='FIT'?'xMidYMid meet':'xMidYMid slice',image=el('image',{x:0,y:0,width,height,href:uri,preserveAspectRatio:mode,opacity:paint.opacity,transform:imageContentTransform(paint.transform,width,height,paint.mode)});image.style.filter=paint.renderHash?'none':imageFilterCss(paint.paintFilter);pattern.append(image);defs.append(pattern);return `url(#${id})`}
function vectorPaintRef(n,paint,index,defs,scope='',slot='fill'){if(!paint||!paint.visible)return 'none';if(paint.type==='IMAGE')return vectorImageRef(n,paint,index+(slot==='stroke'?1000:0),defs,scope)||'none';return paintReference(n,paint,index+(slot==='stroke'?1000:0),defs,scope)||'currentColor'}
function vectorPathPaints(n,path,slot){const key=slot==='stroke'?'strokes':'fills',overrides=path.paintOverrides?.[key];return overrides?.length?overrides:n[key]||[]}
function textElement(n,defs,scope){
const [w,h]=n.size,basePaint=n.fills.find(x=>x.visible&&x.type==='SOLID'),lineHeight=n.lineHeight?.units==='PIXELS'?n.lineHeight.value:n.lineHeight?.value?Number(n.fontSize||14)*n.lineHeight.value:Number(n.fontSize||14)*1.35;
const t=el('text',{fill:basePaint?color(basePaint.color||[0,0,0,1],basePaint.opacity??1):'rgba(0,0,0,1)','font-family':n.font?`'${n.font.replace(/'/g,"\\'")}', Inter, Geist, -apple-system, BlinkMacSystemFont, sans-serif`:'Inter, Geist, -apple-system, BlinkMacSystemFont, sans-serif','font-size':n.fontSize||14,'font-weight':n.fontWeight||400,'font-style':n.fontItalic?'italic':undefined,'letter-spacing':n.letterSpacingUnits==='PERCENT'?`${Number(n.letterSpacing||0)*Number(n.fontSize||14)/100}px`:n.letterSpacingUnits==='PIXELS'?`${Number(n.letterSpacing||0)}px`:undefined,'text-anchor':n.textAlign==='CENTER'?'middle':n.textAlign==='RIGHT'?'end':'start','text-transform':n.textCase==='UPPER'?'uppercase':n.textCase==='LOWER'?'lowercase':undefined,'text-decoration':n.textDecoration&&n.textDecoration!=='NONE'?n.textDecoration.toLowerCase():undefined});
if(n.glyphs?.length){
 const group=el('g',{class:'text-glyphs','aria-label':String(n.text||'')});
 const baseFill=basePaint?vectorPaintRef(n,basePaint,n.fills.indexOf(basePaint),defs,scope||''):'rgba(0,0,0,1)';
 const stroke=n.strokes?.find(paint=>paint.visible&&paint.type==='SOLID');
 for(const glyph of n.glyphs){
  const run=(n.textRuns||[]).find(item=>item.start<=glyph.index&&item.end>glyph.index);
  const fill=run?.color?color(run.color,run.colorOpacity):baseFill;
  const size=Number(glyph.fontSize||n.fontSize||14);
  if(glyph.emojiCodePoints?.length){
   const families=glyph.emojiImageSet==='NOTO'?'"Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", emoji':'"Openfig Emoji APPLE", "Apple Color Emoji", "Noto Color Emoji", "Segoe UI Emoji", emoji';
   const box=glyph.emojiBounds;
   const emoji=el('text',{x:glyph.x+(box?.[0]||0)*size,y:glyph.y+(box?.[1]||0)*size,'dominant-baseline':box?'text-before-edge':undefined,'font-family':families,'font-size':size*(box?.[3]||1),'font-weight':400,'font-style':'normal',fill});
   emoji.textContent=String.fromCodePoint(...glyph.emojiCodePoints);group.append(emoji);continue;
  }
  // Fractional cached baselines otherwise shift text from native outline exports.
  const useAttrs={href:`#glyph_path_${safeId(glyph.pathId)}`,transform:`translate(${glyph.x} ${Math.round(glyph.y)}) scale(${size} ${-size})`,fill};
  if(stroke){useAttrs.stroke=color(stroke.color,stroke.opacity);useAttrs['stroke-width']=2*Number(n.strokeWeight||1)/size;useAttrs['stroke-linejoin']=(n.strokeJoin||'MITER').toLowerCase();useAttrs['paint-order']='stroke fill'}
  group.append(el('use',useAttrs));
 }
 t.setAttribute('opacity','0');t.setAttribute('pointer-events','none');group.append(t);return group;
}
let value=String(n.text||'');const lines=n.baselines.length?n.baselines:null;
const appendLine=(line,start,end)=>{const points=new Set([start,end]);for(const run of n.textRuns||[]){if(run.start>start&&run.start<end)points.add(run.start);if(run.end>start&&run.end<end)points.add(run.end)}const boundaries=[...points].sort((a,b)=>a-b);boundaries.slice(0,-1).forEach((from,index)=>{const to=boundaries[index+1],run=(n.textRuns||[]).find(item=>item.start<=from&&item.end>from),span=el('tspan',{x:index===0?line.x:undefined,y:index===0?line.y:undefined});if(run?.font)span.setAttribute('font-family',`'${run.font.replace(/'/g,"\\'")}', Inter, Geist, -apple-system, BlinkMacSystemFont, sans-serif`);if(run?.fontStyle){span.setAttribute('font-weight',/black/i.test(run.fontStyle)?900:/extrabold|extra bold/i.test(run.fontStyle)?800:/semibold|semi bold|demi/i.test(run.fontStyle)?600:/bold/i.test(run.fontStyle)?700:/medium/i.test(run.fontStyle)?500:/light/i.test(run.fontStyle)?300:400);if(/italic/i.test(run.fontStyle))span.setAttribute('font-style','italic')}if(run?.fontSize)span.setAttribute('font-size',run.fontSize);if(run?.color)span.setAttribute('fill',color(run.color,run.colorOpacity));if(run?.letterSpacing!==null&&run?.letterSpacing!==undefined)span.setAttribute('letter-spacing',run.letterSpacingUnits==='PERCENT'?`${run.letterSpacing*(run.fontSize||n.fontSize||14)/100}px`:`${run.letterSpacing}px`);if(run?.decoration&&run.decoration!=='NONE')span.setAttribute('text-decoration',run.decoration.toLowerCase());if(run?.textCase==='UPPER'||run?.textCase==='LOWER')span.setAttribute('text-transform',run.textCase==='UPPER'?'uppercase':'lowercase');span.textContent=value.slice(from,to);t.append(span)})};
if(lines){for(const line of lines){const start=Math.max(0,Math.min(value.length,line.start));const end=Math.max(start,Math.min(value.length,line.end||value.length));appendLine(line,start,end)}}else{let start=0;value.split('\n').forEach((line,index)=>{appendLine({x:n.textAlign==='CENTER'?w/2:n.textAlign==='RIGHT'?w:0,y:(index+1)*lineHeight},start,start+line.length);start+=line.length+1})}
return t}

function localOverrideTarget(source,override){const path=override.path||[];if(path.length!==1)return null;const candidates=descendants(source.id,[]).map(byId).filter(Boolean),matches=candidates.filter(node=>node.id===path[0]||node.overrideKey===path[0]||node.symbolPublishId===path[0]);if(matches.length===1)return matches[0].id;const [remoteSession,remoteLocal]=path[0].split(':').map(Number);const [publishSession,publishLocal]=String(source.symbolPublishId||'').split(':').map(Number);const [localSession,localId]=String(source.id).split(':').map(Number);if(!Number.isFinite(remoteSession)||remoteSession!==publishSession)return null;const targetId=`${localSession}:${localId+remoteLocal-publishLocal}`;return candidates.some(node=>node.id===targetId)?targetId:null}
function appendNestedOverride(result,source,override){
 const path=override.path||[],nestedId=localOverrideTarget(source,{path:[path[0]]}),nested=byId(nestedId);
 if(!nested)return;
 const patch=result[nestedId]||(result[nestedId]={});
 if(!byId(patch.symbolSource||nested.symbolSource))return;
 patch.symbolOverrides=[...(patch.symbolOverrides||nested.symbolOverrides||[]),{...override,path:path.slice(1)}];
}
function instanceStyleOverrides(instance,source){
 const result={};
 const set=(id)=>result[id]||(result[id]={});
 for(const override of instance.symbolOverrides||[]){
  if((override.path||[]).length>1)continue;
  const id=localOverrideTarget(source,override);
  if(!id)continue;
  const patch=set(id),target=byId(id);
  if(override.text!==undefined){patch.text=override.text;if(override.text!==target?.text){patch.textRuns=[];patch.glyphs=[]}}
  if(override.textBaselines?.length)patch.baselines=override.textBaselines;
  if(override.glyphs?.length)patch.glyphs=override.glyphs;
  if(override.overriddenSymbolId&&byId(override.overriddenSymbolId)){patch.symbolSource=override.overriddenSymbolId;patch.children=[]}
  if(override.size)patch.size=override.size;
  if(override.nodeTransform){patch.matrix=override.nodeTransform;if(!override.size&&!patch.size)patch.size=target.size}
  if(override.textLayoutSize&&target?.type==='TEXT')patch.size=override.textLayoutSize;
  if(override.fills?.length)patch.fills=override.fills;
  if(override.strokes?.length)patch.strokes=override.strokes;
  const vectorGeometry=vectorGeometryForOverride(target,override);
  if(vectorGeometry)patch.vectorGeometry=vectorGeometry;
  if(override.strokeWeight!==undefined)patch.strokeWeight=override.strokeWeight;
  if(override.font)patch.font=override.font;
  if(override.fontStyle)patch.fontStyle=override.fontStyle;
  if(override.fontSize!==undefined)patch.fontSize=override.fontSize;
  if(override.lineHeight)patch.lineHeight=override.lineHeight;
  if(override.letterSpacing!==null&&override.letterSpacing!==undefined){patch.letterSpacing=typeof override.letterSpacing==='object'?override.letterSpacing.value:override.letterSpacing;patch.letterSpacingUnits=override.letterSpacing.units||'PIXELS'}
  if(override.textDecoration)patch.textDecoration=override.textDecoration;
  if(override.textCase)patch.textCase=override.textCase;
  if(override.opacity!==undefined)patch.opacity=override.opacity;
  if(override.visible!==undefined)patch.visible=override.visible
 }
 for(const override of instance.symbolOverrides||[])if((override.path||[]).length>1)appendNestedOverride(result,source,override);
 const root=set(source.id);
 if(instance.fills?.length)root.fills=instance.fills;
 if(instance.strokes?.length)root.strokes=instance.strokes;
 if(instance.effects?.length)root.effects=instance.effects;
 return result
}
function appendSymbolSource(instance,parent,options){const source=byId(instance.symbolSource);if(!source)return false;const chain=new Set(options.symbolChain||[]);if(chain.has(source.id))return false;chain.add(source.id);const overrides=instanceStyleOverrides(instance,source);const sourceSize=overrides[source.id]?.size||source.size;const sx=sourceSize[0]?instance.size[0]/sourceSize[0]:1,sy=sourceSize[1]?instance.size[1]/sourceSize[1]:1;const scope=`${options.renderScope||'symbol'}_${safeId(instance.id)}_${++renderCloneCounter}`;const wrapper=el('g',{transform:`scale(${sx} ${sy})`});parent.append(wrapper);renderNode(source.id,wrapper,{visualOnly:true,ignoreTransform:true,overrides,symbolChain:chain,renderScope:scope,colorModes:options.colorModes||instance.colorModes});return true}
function variableColor(id,modes,seen=new Set()){
 if(!id||seen.has(id))return null;
 seen.add(id);
 const definition=DATA.colorVariables?.[id];if(!definition)return null;
 const value=definition.values?.[modes?.[definition.collection]]||definition.values?.[definition.defaultMode]||Object.values(definition.values||{})[0];
 return value?.color||variableColor(value?.alias,modes,seen);
}
function resolveColorBindings(value,modes){
 if(Array.isArray(value))return value.map(item=>resolveColorBindings(item,modes));
 if(!value||typeof value!=='object')return value;
 const result=Object.fromEntries(Object.entries(value).map(([key,item])=>[key,resolveColorBindings(item,modes)]));
 const resolved=variableColor(result.colorVariable,modes);
 if(resolved){
  if(result.type==='SOLID'&&result.opacity!==undefined){
   const authoredAlpha=(result.color?.[3]??1)*result.opacity;
   const factor=result.colorVariableOpacityFactor??(resolved[3]?authoredAlpha/resolved[3]:1);
   result.colorVariableOpacityFactor=factor;result.opacity=factor;
  }
  result.color=resolved;
 }
 return result;
}
function renderNode(id,parent,options={}){
 const base=byId(id);if(!base)return null;
 const override=options.overrides?.[id]||{},resolved=Object.keys(override).length?{...base,...override}:base;
 const modes=options.colorModes?{...options.colorModes,...base.localColorModes}:base.colorModes||{};
 const contextual=options.visualOnly?resolveColorBindings(resolved,modes):resolved;
 const n={...contextual,colorModes:modes,...(!options.visualOnly&&resolved.previewSize?{size:resolved.previewSize}:{})};
 if(!n.visible)return null;
 const attrs={transform:options.ignoreTransform?undefined:svgMatrix(options.matrixOverride||(!options.visualOnly&&n.previewMatrix)||n.matrix),opacity:n.opacity};
 if(!options.visualOnly){attrs['data-node-id']=id;attrs.class='design-node'}
 const g=el('g',attrs),[w,h]=n.size;
 g.style.mixBlendMode=blendMode(n.blendMode);
 const paint=el('g',{class:options.visualOnly?undefined:'node-paint'});
 let painted=false;
 const symbolDefinition=byId(n.symbolSource);
 const leafGeometryInstance=Boolean(
  n.type==='INSTANCE'&&symbolDefinition&&!n.children.length&&!symbolDefinition.children.length&&n.vectorGeometry?.paths?.length
 );
 const symbolInstance=n.type==='INSTANCE'&&n.symbolSource&&!n.children.length&&!leafGeometryInstance;
 if(!n.isMask&&!n.suppressVisual&&!symbolInstance&&n.type==='TEXT'){
  paint.append(textElement(n,defsRoot,options.renderScope||''));painted=true;
 }else if(!n.isMask&&!n.suppressVisual&&!symbolInstance&&(options.visualOnly||!n.previewReflow)&&hasVectorDrawable(n)){
  paint.append(vectorElement(n,options));painted=true;
 }else if(!n.isMask&&!n.suppressVisual&&!symbolInstance&&n.type!=='BOOLEAN_OPERATION'){
  n.fills.forEach((fill,index)=>{const shape=fillNode(n,fill,index,defsRoot,options.renderScope||'');if(shape){paint.append(shape);painted=true}});
  n.strokes.forEach((stroke,index)=>{if(!stroke.visible)return;const strokePaint=vectorPaintRef(n,stroke,index,defsRoot,options.renderScope||'','stroke');const outline=shapeFor(n,'none',strokePaint,n.strokeWeight);if(outline){paint.append(outline);painted=true}});
 }
 if(!n.isMask&&!n.suppressVisual&&!symbolInstance&&!painted&&w>0&&h>0&&n.type!=='LINE'&&n.type!=='BOOLEAN_OPERATION')paint.append(shapeFor(n,'transparent'));
 const effects=n.isMask||n.suppressVisual?[]:(n.effects||[]).filter(effect=>effect.visible);
 if(!symbolInstance)effects.filter(effect=>effect.type==='DROP_SHADOW').forEach((effect,index)=>{const filterId=effectFilter(`shadow_${renderId(id,options.renderScope||'')}_${index}`,effect,defsRoot,'shadow');let silhouette=painted?paint.cloneNode(true):null;if(!silhouette){silhouette=el('g');silhouette.append(shapeFor(n,'#000'))}const shadow=el('g',{filter:`url(#${filterId})`,class:'node-shadow'});shadow.append(silhouette);g.append(shadow)});
 const inner=effects.find(effect=>effect.type==='INNER_SHADOW');
 if(inner&&!symbolInstance)paint.setAttribute('filter',`url(#${effectFilter(`inner_${renderId(id,options.renderScope||'')}`,inner,defsRoot,'inner')})`);
 const foreground=effects.find(effect=>effect.type==='FOREGROUND_BLUR');
 if(foreground&&!symbolInstance)paint.setAttribute('filter',`url(#${effectFilter(`blur_${renderId(id,options.renderScope||'')}`,foreground,defsRoot,'blur')})`);
 const backdrop=effects.find(effect=>effect.type==='BACKGROUND_BLUR'||effect.type==='GLASS');
 if(backdrop&&!symbolInstance){
  if(backdrop.type==='BACKGROUND_BLUR'){const surface=backgroundBlurElement(n,backdrop,options);if(surface)g.append(surface)}
  else{const surface=shapeFor(n,'rgba(255,255,255,.01)');if(surface){surface.style.backdropFilter=`blur(${backdrop.radius||12}px)`;g.append(surface)}}
 }
 g.append(paint);
 if(n.derivedGeometry?.length)g.append(derivedGeometryElement(n,options));
 if(symbolInstance&&!n.derivedGeometryComplete)appendSymbolSource(n,g,{...options,colorModes:modes});
 else if(n.children.length&&!(n.type==='BOOLEAN_OPERATION'&&n.vectorGeometry?.paths?.length)){
  let childGroup=g;
  if(n.type==='FRAME'&&!n.frameMaskDisabled){const clipId=`clip_frame_${renderId(id,options.renderScope||'')}`;defsRoot.append(makeClip(clipId,w,h,n));childGroup=el('g',{'clip-path':`url(#${clipId})`});g.append(childGroup)}
  const childOptions={...options,ignoreTransform:false,matrixOverride:null,colorModes:options.visualOnly?modes:undefined};
  for(let index=0;index<n.children.length;){
   const childId=n.children[index],child=byId(childId),mask=child&&{...child,...childOptions.overrides?.[childId]};
   if(mask?.isMask){
    let end=index+1;while(end<n.children.length&&!byId(n.children[end])?.isMask)end++;
    const visibleChildren=n.children.slice(index+1,end);
    if(mask.visible&&visibleChildren.length){
     if(mask.name==='Bounding box'&&visibleChildren.every(visibleId=>byId(visibleId)?.type==='VECTOR')){
      for(const visibleId of visibleChildren)renderNode(visibleId,childGroup,childOptions);
     }else{
      const maskId=`mask_${renderId(mask.id,options.renderScope||'')}_${++renderCloneCounter}`,isOutline=mask.maskType==='OUTLINE';
      if(isOutline)defsRoot.append(maskClipPath(maskId,mask));else paintedMask(maskId,mask,childOptions);
      const masked=el('g',{[isOutline?'clip-path':'mask']:`url(#${maskId})`});childGroup.append(masked);
      for(const visibleId of visibleChildren)renderNode(visibleId,masked,childOptions);
     }
    }else if(!mask.visible){
     for(const visibleId of visibleChildren)renderNode(visibleId,childGroup,childOptions);
    }
    index=end;continue;
   }
   renderNode(childId,childGroup,childOptions);index++;
  }
 }
 parent.append(g);return g;
}
let defsRoot;
function buildRoots(){world.replaceChildren();defsRoot=el('defs');for(const [pathId,d] of Object.entries(DATA.glyphPaths||{}))defsRoot.append(el('path',{id:`glyph_path_${safeId(pathId)}`,d}));world.append(defsRoot);renderCloneCounter=0;rootMap.clear();for(const rootId of page.boardRoots){const root=byId(rootId);if(!root)continue;rootMap.set(rootId,rootId);renderNode(rootId,world,{matrixOverride:root.previewMatrix});const [a,b,c,d,x,y]=root.previewMatrix||root.matrix;const [w,h]=root.previewSize||root.size;const label=el('g',{'data-node-id':rootId,class:'design-node',transform:`translate(${x} ${y+h+18})`});const title=el('text',{class:'screen-label',x:0,y:0});title.textContent=root.name;const sub=el('text',{class:'screen-id',x:0,y:14});sub.textContent=`${root.id}  ·  ${Math.round(w)} × ${Math.round(h)}`;label.append(title,sub);world.append(label)}if(selectedId)drawSelection();updateTransform()}
function updateTransform(){world.setAttribute('transform',`translate(${panX} ${panY}) scale(${zoom})`);document.getElementById('zoomLabel').textContent=`${Math.round(zoom*100)}%`}
function animateCamera(){cameraFrame=0;zoom+=(targetZoom-zoom)*.88;panX+=(targetPanX-panX)*.88;panY+=(targetPanY-panY)*.88;if(Math.abs(targetZoom-zoom)<.001&&Math.abs(targetPanX-panX)<.1&&Math.abs(targetPanY-panY)<.1){zoom=targetZoom;panX=targetPanX;panY=targetPanY}else cameraFrame=requestAnimationFrame(animateCamera);updateTransform()}
function moveCamera(nextZoom,nextX,nextY,smooth=true){targetZoom=Math.max(.025,Math.min(8,nextZoom));targetPanX=nextX;targetPanY=nextY;if(!smooth){if(cameraFrame)cancelAnimationFrame(cameraFrame);cameraFrame=0;zoom=targetZoom;panX=targetPanX;panY=targetPanY;updateTransform();return}if(!cameraFrame)cameraFrame=requestAnimationFrame(animateCamera)}
function fitBounds(b,smooth=true){const rect=svg.getBoundingClientRect();const width=Math.max(1,rect.width),height=Math.max(1,rect.height);const scale=Math.min((width-84)/Math.max(1,b[2]),(height-100)/Math.max(1,b[3]));const nextZoom=Math.max(.025,Math.min(8,scale));moveCamera(nextZoom,(width-b[2]*nextZoom)/2-b[0]*nextZoom,(height-b[3]*nextZoom)/2-b[1]*nextZoom,smooth)}
function fitPage(){fitBounds(page.bounds)}
function mul(a,b){return[a[0]*b[0]+a[2]*b[1],a[1]*b[0]+a[3]*b[1],a[0]*b[2]+a[2]*b[3],a[1]*b[2]+a[3]*b[3],a[0]*b[4]+a[2]*b[5]+a[4],a[1]*b[4]+a[3]*b[5]+a[5]]}
function worldBounds(id){const chain=[];let n=byId(id);while(n){chain.unshift(n);if(page.boardRoots.includes(n.id))break;n=byId(n.parent)}if(!chain.length)return null;let m=[1,0,0,1,0,0];for(const item of chain){const matrix=item.previewMatrix||item.matrix;m=mul(m,matrix)}const target=byId(id),[w,h]=target.previewSize||target.size;const pts=[[0,0],[w,0],[0,h],[w,h]].map(([x,y])=>[m[0]*x+m[2]*y+m[4],m[1]*x+m[3]*y+m[5]]);return[Math.min(...pts.map(p=>p[0])),Math.min(...pts.map(p=>p[1])),Math.max(...pts.map(p=>p[0]))-Math.min(...pts.map(p=>p[0])),Math.max(...pts.map(p=>p[1]))-Math.min(...pts.map(p=>p[1]))]}
function focus(id=selectedId){if(!id)return;const b=worldBounds(id);if(!b)return;fitBounds([b[0]-22,b[1]-22,b[2]+44,b[3]+44])}
function currentRootFor(id){let cursor=byId(id);while(cursor){if(page.layerRoots.includes(cursor.id))return cursor.id;cursor=byId(cursor.parent)}return null}
function drawSelection(){world.querySelectorAll('.selected-outline').forEach(x=>x.remove());if(!selectedId)return;const groups=[...world.querySelectorAll('[data-node-id]')];const target=groups.find(x=>x.getAttribute('data-node-id')===selectedId);if(target){const n=byId(selectedId),size=n&&(n.previewSize||n.size);if(n&&size[0]>0&&size[1]>0){const r=cornerValues(n,size[0],size[1]);target.append(el(r.some(x=>x>0)?'path':'rect',r.some(x=>x>0)?{class:'selected-outline',d:roundedPath(size[0],size[1],r)}:{class:'selected-outline',x:0,y:0,width:size[0],height:size[1]}))}}}
function updatePageTabs(){pageTabs.replaceChildren();DATA.pages.forEach((p,index)=>{const b=html('button',{class:`page-tab${index===pageIndex?' active':''}`,type:'button',text:p.name});b.title=`${p.boardRoots.length} canvas items`;b.addEventListener('click',()=>setPage(index));pageTabs.append(b)})}
function updateScreenList(){screenList.replaceChildren();const query=screenSearch.value.trim().toLowerCase();const roots=page.boardRoots.filter(id=>{const n=byId(id);return n&&(!query||n.name.toLowerCase().includes(query)||id.toLowerCase().includes(query))});document.getElementById('screenCount').textContent=`${roots.length} / ${page.boardRoots.length}`;for(const id of roots){const n=byId(id);const row=html('button',{class:`screen-row${id===selectedRoot?' selected':''}`,type:'button'});row.append(html('span',{class:'frame-glyph'}),html('span',{class:'screen-row-name',text:n.name||'(untitled)'}),html('span',{class:'screen-row-id',text:id}));row.addEventListener('click',()=>{selectedRoot=id;selectedId=id;openNodes=new Set([id]);updateScreenList();renderTree();updateInspector();drawSelection();focus(id)});screenList.append(row)}}
function iconFor(type){return({FRAME:'▣',SECTION:'▤',SYMBOL:'◇',INSTANCE:'◈',COMPONENT:'◇',COMPONENT_SET:'◇',TEXT:'T',VECTOR:'◩',ELLIPSE:'○',ROUNDED_RECTANGLE:'▭',LINE:'╱',RECTANGLE:'□'})[type]||'·'}
function descendants(id,acc=[]){const n=byId(id);if(!n)return acc;acc.push(id);for(const c of n.children)descendants(c,acc);return acc}
function pathTo(id,root){const path=[];let n=byId(id);while(n){path.unshift(n.id);if(n.id===root)break;n=byId(n.parent)}return path}
function renderTree(){layerTree.replaceChildren();document.getElementById('layerScope').textContent=selectedRoot?selectedRoot:'page';const query=layerSearch.value.trim().toLowerCase();let roots=selectedRoot?[selectedRoot]:page.layerRoots;
 if(query){const matched=[];for(const root of roots){for(const id of descendants(root)){const n=byId(id);if(n&&(n.name.toLowerCase().includes(query)||id.toLowerCase().includes(query)))matched.push(id)}}roots=matched.slice(0,250);if(!roots.length){layerTree.append(html('div',{class:'no-results',text:'No matching layers'}));return}for(const id of roots){const n=byId(id);const row=html('div',{class:'layer-row'});const label=html('button',{class:'layer-label',type:'button'});label.append(html('span',{class:'type-icon',text:iconFor(n.type)}),html('span',{class:'layer-name',text:n.name||'(untitled)'}),html('span',{class:'layer-count',text:id}));label.addEventListener('click',()=>selectNode(id,false));row.append(label);layerTree.append(row)}return}
 if(!selectedRoot){layerTree.append(html('div',{class:'tree-hint',text:'Choose a screen to see its nested components.'}));return}
 const activePath=selectedId?pathTo(selectedId,selectedRoot):[selectedRoot];activePath.forEach(id=>openNodes.add(id));
 const add=(id,depth)=>{const n=byId(id);if(!n)return;const rowWrap=html('div',{class:`layer-item${n.visible?'':' hidden-node'}`});const row=html('div',{class:`layer-row${id===selectedId?' selected':''}`});row.style.paddingLeft=`${4+depth*12}px`;const hasChildren=n.children.length>0;const disclosure=html('button',{class:`disclosure${hasChildren?'':' empty'}`,type:'button',text:hasChildren?(openNodes.has(id)?'⌄':'›'):''});disclosure.addEventListener('click',event=>{event.stopPropagation();if(openNodes.has(id))openNodes.delete(id);else openNodes.add(id);renderTree()});const label=html('button',{class:'layer-label',type:'button'});label.append(html('span',{class:'type-icon',text:iconFor(n.type)}),html('span',{class:'layer-name',text:n.name||'(untitled)'}));if(hasChildren)label.append(html('span',{class:'layer-count',text:n.children.length}));label.addEventListener('click',()=>selectNode(id,false));row.append(disclosure,label);rowWrap.append(row);if(hasChildren&&openNodes.has(id)){const children=html('div',{class:'layer-children'});for(const childId of n.children)add(childId,depth+1);for(const childId of n.children){const nested=[...layerTree.querySelectorAll(`.layer-item[data-root="${childId}"]`)];void nested}rowWrap.append(children);children.replaceChildren(...n.children.map(childId=>buildTreeItem(childId,depth+1)))}layerTree.append(rowWrap)};
 const buildTreeItem=(id,depth)=>{const n=byId(id);if(!n)return document.createDocumentFragment();const rowWrap=html('div',{class:`layer-item${n.visible?'':' hidden-node'}`});const row=html('div',{class:`layer-row${id===selectedId?' selected':''}`});row.style.paddingLeft=`${4+depth*12}px`;const hasChildren=n.children.length>0;const disclosure=html('button',{class:`disclosure${hasChildren?'':' empty'}`,type:'button',text:hasChildren?(openNodes.has(id)?'⌄':'›'):''});disclosure.addEventListener('click',event=>{event.stopPropagation();if(openNodes.has(id))openNodes.delete(id);else openNodes.add(id);renderTree()});const label=html('button',{class:'layer-label',type:'button'});label.append(html('span',{class:'type-icon',text:iconFor(n.type)}),html('span',{class:'layer-name',text:n.name||'(untitled)'}));if(hasChildren)label.append(html('span',{class:'layer-count',text:n.children.length}));label.addEventListener('click',()=>selectNode(id,false));row.append(disclosure,label);rowWrap.append(row);if(hasChildren&&openNodes.has(id)){const children=html('div',{class:'layer-children'});children.replaceChildren(...n.children.map(childId=>buildTreeItem(childId,depth+1)));rowWrap.append(children)}return rowWrap};
 for(const root of roots){const n=byId(root);if(!n)continue;const item=buildTreeItem(root,0);layerTree.append(item)}
}
function selectNode(id,shouldFocus=false){const n=byId(id);if(!n)return;selectedId=id;const root=currentRootFor(id);if(root!==selectedRoot){selectedRoot=root;openNodes=new Set(root?[root]:[])}const activePath=pathTo(id,selectedRoot);activePath.forEach(x=>openNodes.add(x));updateScreenList();renderTree();updateInspector();drawSelection();if(shouldFocus&&page.boardRoots.includes(root))focus(id)}
function cssPaint(p){if(p.type==='SOLID')return color(p.color,p.opacity);if(p.type==='GRADIENT_LINEAR'||p.type==='GRADIENT_RADIAL'){const stops=(p.stops||[]).map(stop=>`${color(stop.color,p.opacity)} ${Math.round(stop.position*10000)/100}%`).join(', ');if(p.type==='GRADIENT_RADIAL')return `radial-gradient(circle, ${stops})`;const t=p.transform||[1,0,0,1,0,0],angle=Math.round(90-Math.atan2(t[1],t[0])*180/Math.PI);return `linear-gradient(${angle}deg, ${stops})`}if(p.type==='IMAGE'&&DATA.images[p.hash])return `url("${DATA.images[p.hash]}")`;return null}
function cssForNode(n){const fmt=value=>Math.round(Number(value)*100)/100;const lines=['position: absolute;',`width: ${fmt(n.size[0])}px;`,`height: ${fmt(n.size[1])}px;`,`transform: matrix(${n.matrix.join(', ')});`];if(n.opacity<1)lines.push(`opacity: ${fmt(n.opacity)};`);if(n.blendMode&&n.blendMode!=='NORMAL')lines.push(`mix-blend-mode: ${blendMode(n.blendMode)};`);const paints=(n.fills||[]).filter(p=>p.visible).map(cssPaint).filter(Boolean);if(n.type==='TEXT'){const fill=n.fills.find(p=>p.visible&&p.type==='SOLID');lines.push(`font-family: "${(n.font||'Inter').replace(/"/g,'\\"')}", Inter, Geist, -apple-system, BlinkMacSystemFont, sans-serif;`,`font-size: ${fmt(n.fontSize||14)}px;`,`font-weight: ${n.fontWeight||400};`);if(n.fontItalic)lines.push('font-style: italic;');if(fill)lines.push(`color: ${color(fill.color,fill.opacity)};`);if(n.lineHeight?.value){const value=n.lineHeight.units==='PIXELS'?`${fmt(n.lineHeight.value)}px`:n.lineHeight.units==='PERCENT'?`${fmt(n.lineHeight.value)}%`:fmt(n.lineHeight.value);lines.push(`line-height: ${value};`)}if(n.letterSpacing)lines.push(`letter-spacing: ${fmt(n.letterSpacingUnits==='PERCENT'?n.letterSpacing*(n.fontSize||14)/100:n.letterSpacing)}px;`);lines.push(`text-align: ${(n.textAlign||'LEFT').toLowerCase()};`);if(n.textCase==='UPPER'||n.textCase==='LOWER')lines.push(`text-transform: ${n.textCase.toLowerCase()};`);if(n.textDecoration&&n.textDecoration!=='NONE')lines.push(`text-decoration: ${n.textDecoration.toLowerCase()};`)}else if(paints.length){lines.push(`${n.type==='VECTOR'?'fill':'background'}: ${paints.reverse().join(', ')};`);if(n.fills.some(p=>p.type==='IMAGE'&&p.visible))lines.push(`background-size: ${n.fills.filter(p=>p.type==='IMAGE'&&p.visible).map(p=>p.mode==='STRETCH'?'100% 100%':p.mode==='FIT'?'contain':'cover').join(', ')};`)}const stroke=(n.strokes||[]).find(p=>p.visible&&p.color);if(stroke){if(n.type==='VECTOR'||n.type==='LINE'){lines.push(`stroke: ${color(stroke.color,stroke.opacity)};`,`stroke-width: ${fmt(n.strokeWeight||1)}px;`);if(n.dashPattern?.length)lines.push(`stroke-dasharray: ${n.dashPattern.map(fmt).join(' ')};`)}else lines.push(`border: ${fmt(n.strokeWeight||1)}px ${n.dashPattern?.length?'dashed':'solid'} ${color(stroke.color,stroke.opacity)};`)}if((n.cornerRadii||[]).some(x=>x>0))lines.push(`border-radius: ${(n.cornerRadii||[]).map(fmt).map(x=>`${x}px`).join(' ')};`);const shadows=(n.effects||[]).filter(e=>e.visible&&['DROP_SHADOW','INNER_SHADOW'].includes(e.type)).map(e=>`${e.type==='INNER_SHADOW'?'inset ':''}${fmt(e.offset[0])}px ${fmt(e.offset[1])}px ${fmt(e.radius)}px ${fmt(e.spread)}px ${color(e.color)}`);if(shadows.length)lines.push(`box-shadow: ${shadows.join(', ')};`);const backdrop=(n.effects||[]).find(e=>e.visible&&(e.type==='BACKGROUND_BLUR'||e.type==='GLASS'));if(backdrop)lines.push(`backdrop-filter: blur(${fmt(backdrop.radius||12)}px);`);const foreground=(n.effects||[]).find(e=>e.visible&&e.type==='FOREGROUND_BLUR');if(foreground)lines.push(`filter: blur(${fmt(foreground.radius)}px);`);if(n.type==='FRAME'&&!n.frameMaskDisabled)lines.push('overflow: hidden;');if(n.layout?.mode){lines.push(`display: flex;`,`flex-direction: ${n.layout.mode==='HORIZONTAL'?'row':'column'};`);if(n.layout.spacing)lines.push(`gap: ${fmt(n.layout.spacing)}px;`);const align={MIN:'flex-start',MAX:'flex-end',CENTER:'center',BASELINE:'baseline',SPACE_BETWEEN:'space-between'},cross=align[n.layout.alignCross]||'stretch',main=align[n.layout.alignMain]||'flex-start';lines.push(`align-items: ${cross};`,`justify-content: ${main};`);if(n.layout.padding?.some(x=>x>0))lines.push(`padding: ${n.layout.padding.map(fmt).map(x=>`${x}px`).join(' ')};`)}return `.figma-node-${safeId(n.id)} {\n${lines.map(line=>`  ${line}`).join('\n')}\n}`}
function updateInspector(){inspector.replaceChildren();if(!selectedId){inspector.append(html('div',{class:'inspector-empty',text:'Select a screen, frame, or component on the canvas to inspect its Figma properties.'}));return}const n=byId(selectedId);if(!n)return;const head=html('div',{class:'inspector-title'});head.append(html('div',{class:'inspector-name',text:n.name||'(untitled)'}),html('div',{class:'inspector-kind',text:`${n.type} · ${n.id}`}));inspector.append(head);const body=html('div',{class:'inspector-body'});const geom=html('section',{class:'prop-group'});geom.append(html('div',{class:'prop-heading',text:'Geometry'}));const grid=html('div',{class:'prop-grid'});for(const [label,value] of [['Width',n.size[0]],['Height',n.size[1]],['X',n.matrix[4]],['Y',n.matrix[5]]]){const box=html('div',{class:'prop'});box.append(html('span',{text:label}),html('strong',{text:`${Math.round(value*100)/100}px`}));grid.append(box)}geom.append(grid);body.append(geom);
 const paints=n.fills.filter(x=>x.visible);if(paints.length){const block=html('section',{class:'prop-group'});block.append(html('div',{class:'prop-heading',text:'Fill'}));const swatches=html('div',{class:'swatches'});for(const paint of paints){const sw=html('span',{class:'swatch'});if(paint.color)sw.style.background=color(paint.color,paint.opacity);else if(paint.type==='IMAGE')sw.style.backgroundImage=`url(${DATA.images[paint.hash]||''})`;else if(paint.stops?.length)sw.style.background=`linear-gradient(90deg,${paint.stops.map(s=>color(s.color)).join(',')})`;sw.title=paint.type;swatches.append(sw)}block.append(swatches);body.append(block)}
 if(n.font||n.type==='TEXT'){const block=html('section',{class:'prop-group'});block.append(html('div',{class:'prop-heading',text:'Typography'}));const grid2=html('div',{class:'prop-grid'});for(const [label,value] of [['Font',n.font||'Unknown'],['Style',n.fontStyle||'Regular'],['Size',`${n.fontSize}px`]]){const box=html('div',{class:'prop'});box.append(html('span',{text:label}),html('strong',{text:value}));grid2.append(box)}block.append(grid2);if(n.text)block.append(html('div',{class:'text-sample',text:n.text}));body.append(block)}
 const cssText=cssForNode(n),cssPanel=html('section',{class:'css-panel'}),cssHead=html('div',{class:'css-panel-head'}),copy=html('button',{class:'css-copy',type:'button',text:'Copy CSS'}),cssCode=html('pre',{class:'css-code'});cssHead.append(html('span',{text:'Style'}),copy);cssCode.textContent=cssText;cssPanel.append(cssHead,cssCode);copy.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(cssText);copy.textContent='Copied';setTimeout(()=>copy.textContent='Copy CSS',1200)}catch{copy.textContent='Copy failed';setTimeout(()=>copy.textContent='Copy CSS',1200)}});body.append(cssPanel);
 const details=html('section',{class:'prop-group'});details.append(html('div',{class:'prop-heading',text:'Node'}),html('div',{class:'pathline',text:`${n.children.length} child layers · opacity ${Math.round(n.opacity*100)}%`}));const path=pathTo(n.id,selectedRoot).map(x=>byId(x)?.name||x).join(' / ');details.append(html('div',{class:'pathline',text:path}));body.append(details);inspector.append(body)}
function setPage(index,focusFirst=false){pageIndex=index;page=DATA.pages[index];selectedId=null;selectedRoot=null;openNodes.clear();screenSearch.value='';layerSearch.value='';updatePageTabs();updateScreenList();renderTree();updateInspector();const rect=svg.getBoundingClientRect();svg.setAttribute('viewBox',`0 0 ${Math.max(1,rect.width)} ${Math.max(1,rect.height)}`);buildRoots();if(focusFirst&&page.boardRoots.length)focus(page.boardRoots[0]);else fitPage();}
function resizeCanvas(){const r=svg.getBoundingClientRect();svg.setAttribute('viewBox',`0 0 ${Math.max(1,r.width)} ${Math.max(1,r.height)}`);if(page)fitPage(false)}
updatePageTabs();setPage(0,true);
screenSearch.addEventListener('input',updateScreenList);layerSearch.addEventListener('input',renderTree);
document.getElementById('fitCanvas').addEventListener('click',fitPage);document.getElementById('focusSelection').addEventListener('click',()=>focus());const zoomAtCenter=factor=>{const rect=svg.getBoundingClientRect(),x=rect.width/2,y=rect.height/2,next=Math.max(.025,Math.min(8,targetZoom*factor)),ratio=next/targetZoom;moveCamera(next,x-(x-targetPanX)*ratio,y-(y-targetPanY)*ratio)};document.getElementById('zoomIn').addEventListener('click',()=>zoomAtCenter(1.5));document.getElementById('zoomOut').addEventListener('click',()=>zoomAtCenter(1/1.5));
svg.addEventListener('pointerdown',event=>{if(spaceDown||event.button===1){drag={x:event.clientX,y:event.clientY,moved:false};svg.setPointerCapture(event.pointerId);svg.style.cursor='grabbing';event.preventDefault()}});svg.addEventListener('pointermove',event=>{if(!drag)return;const dx=event.clientX-drag.x,dy=event.clientY-drag.y;if(dx||dy)drag.moved=true;targetPanX+=dx;targetPanY+=dy;panX=targetPanX;panY=targetPanY;drag={x:event.clientX,y:event.clientY,moved:drag.moved};updateTransform()});svg.addEventListener('pointerup',()=>{suppressClick=Boolean(drag?.moved);drag=null;svg.style.cursor=''});svg.addEventListener('pointercancel',()=>{suppressClick=Boolean(drag?.moved);drag=null;svg.style.cursor=''});
function clearSelection(){selectedId=null;selectedRoot=null;updateScreenList();renderTree();updateInspector();drawSelection()}
svg.addEventListener('click',event=>{if(suppressClick){suppressClick=false;return}const target=event.target.closest('[data-node-id]');if(target)selectNode(target.getAttribute('data-node-id'),false);else clearSelection()});svg.addEventListener('dblclick',event=>{const target=event.target.closest('[data-node-id]');if(target){selectNode(target.getAttribute('data-node-id'),false);focus(target.getAttribute('data-node-id'))}});
svg.addEventListener('wheel',event=>{event.preventDefault();if(event.ctrlKey||event.metaKey){const rect=svg.getBoundingClientRect(),x=event.clientX-rect.left,y=event.clientY-rect.top,next=Math.max(.025,Math.min(8,targetZoom*Math.exp(-event.deltaY*.001))),ratio=next/targetZoom;moveCamera(next,x-(x-targetPanX)*ratio,y-(y-targetPanY)*ratio);return}const scale=event.deltaMode===1?16:event.deltaMode===2?svg.clientHeight:1;const dx=event.shiftKey?event.deltaY:event.deltaX,dy=event.shiftKey?0:event.deltaY;targetPanX-=dx*scale;targetPanY-=dy*scale;if(!cameraFrame){panX=targetPanX;panY=targetPanY;updateTransform()}},{passive:false});
window.addEventListener('keydown',event=>{if(event.code==='Space'&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){spaceDown=true;event.preventDefault()}if(event.key==='2'&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName))focus();if(event.key==='Escape')clearSelection()});window.addEventListener('keyup',event=>{if(event.code==='Space')spaceDown=false});window.addEventListener('resize',resizeCanvas);
</script>
</body>
</html>'''.replace('__GEIST_FONT__', FONT_DATA.get('Geist', '')).replace('__GEIST_MONO_FONT__', FONT_DATA.get('Geist Mono', '')).replace('__EXTRA_FONT_FACES__', FONT_FACE_CSS).replace('__SOURCE_NAME__', html_lib.escape(args.source_name, quote=True)).replace('__PAYLOAD__', json_text)
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
OUTPUT.write_text(html)
print(f'Wrote {OUTPUT}')
print(f'Pages: {len(pages)}; nodes: {len(nodes)}; vectors: {len(vectors)}; embedded image fills: {len(embedded_images)}')
print(f'Flattened screen nodes: {len(screen_node_ids)}; matched instance overrides: {flat_override_count}; vectors from Figma geometry: {vector_geometry_count}')
for spec in pages:
    print(f"{spec['name']}: {len(spec['boardRoots'])} canvas items, {len(spec['layerRoots'])} layer roots")
print(f'Bytes: {OUTPUT.stat().st_size}')
