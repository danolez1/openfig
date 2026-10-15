import { createRequire } from 'node:module';
import { deflateRawSync } from 'node:zlib';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const require = createRequire(new URL('../packages/core/package.json', import.meta.url));
const { parseSchema, compileSchema, encodeBinarySchema } = require('kiwi-schema');
const args = process.argv.slice(2);
if (args.length !== 2 || args[0] !== '--output') throw new Error('Usage: node scripts/create-demo.mjs --output <new-file.fig>');
const output = resolve(args[1]);
if (!output.endsWith('.fig')) throw new Error('Demo output must end in .fig.');
const schema = parseSchema(`
enum NodeType { DOCUMENT = 0; CANVAS = 1; FRAME = 2; ROUNDED_RECTANGLE = 3; TEXT = 4; ELLIPSE = 5; }
enum PaintType { SOLID = 0; }
struct GUID { uint sessionID; uint localID; }
struct Vector { float x; float y; }
struct Transform { float m00; float m01; float m02; float m10; float m11; float m12; }
struct Color { float r; float g; float b; float a; }
message Parent { GUID guid = 1; string position = 2; }
message Font { string family = 1; string style = 2; }
message Text { string characters = 1; }
message Paint { PaintType type = 1; Color color = 2; float opacity = 3; bool visible = 4; }
message Blob { byte[] bytes = 1; }
message Node { GUID guid = 1; NodeType type = 2; string name = 3; Parent parentIndex = 4; bool visible = 5; float opacity = 6; Vector size = 7; Transform transform = 8; Paint[] fillPaints = 9; float cornerRadius = 10; Font fontName = 11; float fontSize = 12; Text textData = 13; bool frameMaskDisabled = 14; }
message Message { Node[] nodeChanges = 1; Blob[] blobs = 2; }
`);
const compiled = compileSchema(schema), nodes = [];
const color = hex => ({ r: parseInt(hex.slice(1, 3), 16) / 255, g: parseInt(hex.slice(3, 5), 16) / 255, b: parseInt(hex.slice(5, 7), 16) / 255, a: 1 });
let nextId = 1;
function node(type, name, parent, x = 0, y = 0, width = 0, height = 0, fill, radius = 0) {
  const guid = { sessionID: 1, localID: nextId++ };
  const value = { guid, type, name, visible: true, opacity: 1, size: { x: width, y: height }, transform: { m00: 1, m01: 0, m02: x, m10: 0, m11: 1, m12: y }, cornerRadius: radius, frameMaskDisabled: true };
  if (parent) value.parentIndex = { guid: parent.guid, position: String(guid.localID).padStart(5, '0') };
  if (fill) value.fillPaints = [{ type: 'SOLID', color: color(fill), opacity: 1, visible: true }];
  nodes.push(value);
  return value;
}
const rect = (name, parent, x, y, w, h, fill, radius = 0) => node('ROUNDED_RECTANGLE', name, parent, x, y, w, h, fill, radius);
function text(value, parent, x, y, width, size = 16, fill = '#273B35', style = 'Regular') {
  const entry = node('TEXT', value, parent, x, y, width, size * 1.6, fill);
  entry.fontName = { family: 'Inter', style };
  entry.fontSize = size;
  entry.textData = { characters: value };
  return entry;
}
const document = node('DOCUMENT', 'Openfig original demo');
const page = node('CANVAS', 'Product design', document);
const overview = node('FRAME', 'Workspace overview', page, 0, 0, 1120, 780, '#F7F8F4', 18);
rect('Navigation', overview, 0, 0, 206, 780, '#FFFFFF');
text('fieldwork', overview, 28, 28, 150, 25, '#273B35', 'SemiBold');
text('DESIGN WORKSPACE', overview, 28, 88, 150, 10, '#7A857F', 'Medium');
for (const [i, label] of ['Overview', 'Projects', 'Library', 'Activity'].entries()) {
  if (!i) rect('Selected navigation item', overview, 16, 124 + i * 46, 174, 38, '#E7EFE7', 7);
  text(label, overview, 32, 130 + i * 46, 140, 13, i ? '#738079' : '#2E5946', 'Medium');
}
rect('Workspace avatar', overview, 28, 700, 32, 32, '#DFE8DC', 16);
text('F', overview, 39, 705, 20, 12, '#426146', 'SemiBold');
text('Fieldwork Studio', overview, 72, 703, 122, 11, '#526259', 'Medium');
text('Good morning, designer', overview, 246, 34, 690, 12, '#7A857F');
text('A little room to make things.', overview, 246, 62, 790, 30, '#273B35', 'SemiBold');
text('Your projects, ideas and shared components in one place.', overview, 246, 112, 750, 14, '#7A857F');
rect('New project button', overview, 918, 38, 160, 38, '#345B47', 7);
text('+  New project', overview, 940, 46, 140, 12, '#FFFFFF', 'Medium');
for (const [i, item] of [['Active projects', '12', '+2 this month'], ['Shared components', '148', 'Across 4 libraries'], ['In review', '03', 'Ready for feedback']].entries()) {
  const x = 246 + i * 282;
  rect(item[0] + ' card', overview, x, 176, 266, 126, '#FFFFFF', 12);
  text(item[0], overview, x + 22, 191, 225, 12, '#7A857F');
  text(item[1], overview, x + 22, 219, 100, 31, '#273B35', 'SemiBold');
  text(item[2], overview, x + 22, 269, 225, 10, '#7A857F');
}
text('Recent projects', overview, 246, 332, 400, 18, '#273B35', 'SemiBold');
text('View all projects', overview, 957, 337, 140, 11, '#5E7565');
for (const [i, item] of [['Studio website', '#E7EDDE', 'Brand and product'], ['Reading room', '#E7E1D6', 'Editorial design'], ['Small moments', '#DFE8E8', 'Mobile experience']].entries()) {
  const x = 246 + i * 282;
  rect(item[0] + ' project', overview, x, 378, 266, 264, '#FFFFFF', 12);
  rect(item[0] + ' cover', overview, x + 12, 390, 242, 166, item[1], 8);
  if (i === 0) { rect('Cover layout', overview, x + 37, 414, 192, 118, '#FFFFFF', 6); rect('Cover heading', overview, x + 52, 432, 88, 8, '#426146', 4); rect('Cover artwork', overview, x + 52, 455, 162, 58, '#CCD8C4', 4); }
  if (i === 1) { text('A slower', overview, x + 34, 419, 210, 25, '#6B5948', 'Medium'); text('kind of Sunday.', overview, x + 34, 452, 210, 23, '#6B5948', 'Medium'); }
  if (i === 2) { rect('Mobile cover', overview, x + 90, 406, 88, 136, '#FFFFFF', 12); rect('Mobile picture', overview, x + 99, 421, 70, 65, '#BFD2D0', 6); }
  text(item[0], overview, x + 20, 570, 230, 14, '#273B35', 'SemiBold');
  text(item[2], overview, x + 20, 601, 230, 11, '#7A857F');
}
text('Make space for your next idea.', overview, 246, 691, 700, 13, '#7A857F');
const library = node('FRAME', 'Component library', page, 1250, 0, 1120, 780, '#FFFFFF', 18);
text('A considered set of essentials.', library, 56, 40, 1000, 30, '#273B35', 'SemiBold');
text('Buttons, fields and surfaces for the Fieldwork workspace.', library, 56, 94, 950, 15, '#7A857F');
for (const [i, label] of ['Primary action', 'Secondary action', 'Quiet action'].entries()) {
  const x = 56 + i * 330;
  text(label, library, x, 178, 300, 12, '#7A857F');
  rect(label + ' button', library, x, 218, 230, 42, i === 0 ? '#345B47' : i === 1 ? '#E7EFE7' : '#F7F8F4', 7);
  text('Create project', library, x + 29, 228, 190, 13, i === 0 ? '#FFFFFF' : '#345B47', 'Medium');
  text('Project name', library, x, 334, 300, 12, '#526259');
  rect('Input surface', library, x, 372, 288, 46, '#F3F5F1', 7);
  text('A new beginning', library, x + 16, 384, 250, 12, '#7A857F');
  rect('Card surface', library, x, 494, 288, 180, '#F3F5F1', 12);
  text('Simple by design.', library, x + 22, 518, 250, 18, '#273B35', 'SemiBold');
  text('A little less, a little clearer.', library, x + 22, 557, 250, 12, '#7A857F');
}
const mobile = node('FRAME', 'Mobile project', page, 2500, 0, 390, 780, '#F7F8F4', 24);
text('fieldwork', mobile, 28, 35, 320, 25, '#273B35', 'SemiBold');
text('Ideas for a slower day.', mobile, 28, 105, 330, 25, '#273B35', 'SemiBold');
rect('Featured artwork', mobile, 28, 186, 334, 280, '#DFE8DC', 12);
text('Small moments,', mobile, 50, 260, 300, 29, '#426146', 'Medium');
text('better together.', mobile, 50, 306, 300, 29, '#426146', 'Medium');
text('Start something you care about.', mobile, 28, 502, 330, 16, '#526259');
rect('Mobile action', mobile, 28, 580, 334, 48, '#345B47', 8);
text('Explore the collection', mobile, 92, 594, 280, 13, '#FFFFFF', 'Medium');
const schemaBytes = deflateRawSync(encodeBinarySchema(schema));
const messageBytes = deflateRawSync(compiled.encodeMessage({ nodeChanges: nodes, blobs: [] }));
const header = Buffer.alloc(12); header.write('fig-kiwi'); header.writeUInt32LE(106, 8);
const chunk = data => { const length = Buffer.alloc(4); length.writeUInt32LE(data.length); return Buffer.concat([length, data]); };
await mkdir(dirname(output), { recursive: true });
await writeFile(output, Buffer.concat([header, chunk(schemaBytes), chunk(messageBytes)]), { flag: 'wx' });
console.log(JSON.stringify({ output, nodes: nodes.length, source: 'Original Openfig demonstration, no imported design assets.' }, null, 2));
