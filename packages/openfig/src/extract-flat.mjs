import { writeFile } from 'node:fs/promises';
import { FigmaDocument } from '@grida/refig';

const [source, output] = process.argv.slice(2);
if (!source || !output) throw new Error('Usage: extract-flat.mjs <input.fig> <output.json>');
const fig = FigmaDocument.fromFile(source);
fig._resolve();
const nodes = {};
const pages = [];
const fields = [
  'id', 'name', 'type', 'visible', 'opacity', 'blendMode', 'size', 'relativeTransform',
  'fills', 'strokes', 'strokeWeight', 'strokeAlign', 'strokeCap', 'strokeJoin', 'cornerRadius',
  'rectangleCornerRadii', 'effects', 'clipsContent', 'fillGeometry', 'strokeGeometry', 'characters', 'style', 'lineTypes',
  'lineIndentations', 'textCase', 'textDecoration', '_overrideKey', 'layoutMode', 'layoutDirection',
  'layoutMainAxisAlignment', 'layoutCrossAxisAlignment', 'layoutMainAxisGap', 'padding',
  'frameMaskDisabled'
];

function visit(node, parentId, ancestors) {
  if (!node?.id || ancestors.has(node.id)) return;
  const children = node.children || [];
  const entry = { parentId, children: children.map((child) => child.id) };
  for (const field of fields) {
    if (node[field] !== undefined) entry[field] = node[field];
  }
  nodes[node.id] = entry;
  const nextAncestors = new Set(ancestors);
  nextAncestors.add(node.id);
  for (const child of children) visit(child, node.id, nextAncestors);
}

for (const page of fig._figFile.pages || []) {
  const roots = page.rootNodes || [];
  pages.push({ name: page.name, roots: roots.map((node) => node.id) });
  for (const root of roots) visit(root, null, new Set());
}

await writeFile(output, JSON.stringify({ pages, nodes }));
process.stdout.write(`Parsed ${Object.keys(nodes).length} flattened nodes across ${pages.length} pages.\n`);
