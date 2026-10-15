import { mkdir, readFile, readdir, rename, writeFile } from 'node:fs/promises';
import { join, resolve, sep } from 'node:path';
import { randomUUID } from 'node:crypto';
import { openSync } from 'fontkit';
import { auditFontRequirements, buildNodeContext, comparePng, composeBundleVectorGroupSvg, describePng, doctorBundle, inspectNode, resolveNodeReference, searchNodes } from '../../core/dist/index.js';

const reference = { name: 'reference', type: 'text', required: true, label: 'Node ID or Figma URL' };
const query = { name: 'query', type: 'text', required: true, label: 'Search text' };
const image = { name: 'imageBase64', type: 'file', required: true, label: 'PNG image' };
export const operations = [
  { name: 'resolve', description: 'Resolve a node ID or Figma URL.', fields: [reference] },
  { name: 'inspect', description: 'Read the complete normalized node.', fields: [reference] },
  { name: 'inspect-node', description: 'Inspect a bounded subtree.', fields: [reference, { name: 'depth', type: 'number' }, { name: 'maxChildren', type: 'number' }] },
  { name: 'search', description: 'Search node names and text.', fields: [query, { name: 'type', type: 'text' }, { name: 'limit', type: 'number' }] },
  { name: 'pack', description: 'Build coding context with tokens and references.', fields: [reference] },
  { name: 'render', description: 'Export a vector group as SVG.', fields: [reference] },
  { name: 'doctor', description: 'Check the extracted bundle and indexed files.', fields: [] },
  { name: 'font-check', description: 'Compare required fonts with the configured local fonts.', fields: [] },
  { name: 'reference', description: 'Attach a reference PNG to a node.', fields: [reference, image] },
  { name: 'compare', description: 'Compare a candidate PNG with an attached reference.', fields: [reference, image, { name: 'threshold', type: 'number' }, { name: 'maxMismatchRatio', type: 'number' }] }
];
export const mcpTools = [
  { name: 'list_frames', description: 'List extracted frames and canvases.' },
  { name: 'list_frame_summaries', description: 'Read compact, paginated frame summaries.' },
  { name: 'search_nodes', description: 'Search local node names and text.' },
  { name: 'get_node_context', description: 'Read a node and its attached reference.' },
  { name: 'get_frame_bundle', description: 'Read subtree context, tokens, assets, and vectors.' },
  { name: 'get_vector_svg', description: 'Compose an SVG from a vector group.' },
  { name: 'get_style_tokens', description: 'Read styles, font requirements, and variables.' },
  { name: 'get_asset', description: 'Find an extracted image by hash.' },
  { name: 'inspect_node', description: 'Inspect a bounded node subtree.' },
  { name: 'review_visual_match', description: 'Compare an attached reference with a candidate PNG in this document bundle.' }
];

export async function readDocument(session) {
  return readJson(join(session.bundle, 'document.agent.json'));
}

export async function readTokens(session, nodeIds) {
  const selected = nodeIds ? new Set(nodeIds) : null;
  const entries = await Promise.all(['colors', 'typography', 'effects'].map(async (name) => {
    const value = await readJson(join(session.bundle, 'tokens', `${name}.json`));
    return [name, selected ? value.tokens.filter((token) => token.nodeIds.some((id) => selected.has(id))) : value];
  }));
  const fonts = await readJson(join(session.bundle, 'tokens/fonts.json'));
  const variables = await readJson(join(session.bundle, 'tokens/variables.json'), { collections: [], ungrouped: [] });
  return { ...Object.fromEntries(entries), fonts: selected ? fonts.fonts.filter((font) => font.nodeIds.some((id) => selected.has(id))) : fonts, variables };
}

export async function readAssets(session) {
  const { images } = await readJson(join(session.bundle, 'assets/images.json'));
  return images.map((asset) => ({ ...asset, url: `/api/documents/${session.id}/assets/${asset.hash}` }));
}

export async function runAction(session, body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) throw badRequest('Action must be a JSON object.');
  if (!operations.some((operation) => operation.name === body.operation)) throw badRequest('Unknown operation.');
  if (body.operation === 'doctor') return doctorBundle(session.bundle);
  if (body.operation === 'font-check') return checkFonts(session);
  const document = await readDocument(session);
  if (body.operation === 'search') {
    const limit = optionalInteger(body.limit, 1, 10000);
    if (body.type !== undefined && typeof body.type !== 'string') throw badRequest('type must be text.');
    return { nodes: searchNodes(document, requiredString(body.query, 'query'), { type: body.type, limit }) };
  }
  const node = resolveNodeReference(document, requiredString(body.reference, 'reference'));
  if (body.operation === 'resolve' || body.operation === 'inspect') return node;
  if (body.operation === 'inspect-node') return inspectNode(document, node, { depth: optionalInteger(body.depth, 0, 5), maxChildren: optionalInteger(body.maxChildren, 0, 100) });
  if (body.operation === 'pack') {
    if (body.format !== undefined && body.format !== 'codex') throw badRequest('Only the codex context format is supported.');
    const context = buildNodeContext(document, node);
    const references = await readReferences(session);
    const manifest = await readJson(join(session.bundle, 'manifest.json'));
    return { format: 'codex', ...context, tokens: await readTokens(session, context.nodeIds), references: references.references.filter((item) => context.nodeIds.includes(item.nodeId)), visualBaseline: manifest.visualBaseline };
  }
  if (body.operation === 'render') {
    const svg = await composeBundleVectorGroupSvg(session.bundle, document, node.id);
    if (!svg) throw badRequest(`No renderable vector group matches ${body.reference}.`);
    return { nodeId: node.id, svg };
  }
  const bytes = pngBytes(body.imageBase64);
  const description = describePng(bytes);
  if (body.operation === 'reference') {
    return queueReferenceWrite(session, async () => {
      const path = `references/${safeName(node.id)}.png`;
      await mkdir(join(session.bundle, 'references'), { recursive: true });
      await writeAtomic(join(session.bundle, path), bytes);
      const entry = { nodeId: node.id, path, ...description };
      const index = await readReferences(session);
      const references = index.references.filter((item) => item.nodeId !== node.id);
      references.push(entry);
      references.sort((a, b) => a.nodeId.localeCompare(b.nodeId));
      await writeJson(join(session.bundle, 'references/index.json'), { contractVersion: '1', references });
      return entry;
    });
  }
  const reference = (await readReferences(session)).references.find((item) => item.nodeId === node.id);
  if (!reference) throw badRequest(`No reference PNG is attached to node ${node.id}.`);
  const threshold = optionalRatio(body.threshold) ?? 0.1;
  const maxMismatchRatio = optionalRatio(body.maxMismatchRatio);
  const comparison = comparePng(await readFile(bundlePath(session, reference.path)), bytes, threshold);
  const directory = `comparisons/${safeName(node.id)}`;
  await mkdir(join(session.bundle, directory), { recursive: true });
  await writeFile(join(session.bundle, directory, 'candidate.png'), bytes);
  await writeFile(join(session.bundle, directory, 'diff.png'), comparison.diffPng);
  const { diffPng, ...metrics } = comparison;
  const report = {
    nodeId: node.id, reference, threshold, ...metrics,
    candidatePath: join(session.bundle, directory, 'candidate.png'),
    candidateUrl: `/api/documents/${session.id}/files/${directory}/candidate.png`,
    diffUrl: `/api/documents/${session.id}/files/${directory}/diff.png`,
    ...(maxMismatchRatio === undefined ? {} : { passed: comparison.mismatchRatio <= maxMismatchRatio, maxMismatchRatio })
  };
  await writeJson(join(session.bundle, directory, 'report.json'), report);
  return report;
}

export async function readJson(path, fallback) {
  try { return JSON.parse(await readFile(path, 'utf8')); }
  catch (error) { if (fallback !== undefined && error?.code === 'ENOENT') return fallback; throw error; }
}

export function bundlePath(session, path) {
  const absolute = resolve(session.bundle, path);
  if (!absolute.startsWith(resolve(session.bundle) + sep)) throw badRequest('File path must stay inside this document bundle.');
  return absolute;
}

export function badRequest(message) {
  return Object.assign(new Error(message), { status: 400 });
}

export function optionalInteger(value, minimum, maximum) {
  if (value === undefined || value === null || value === '') return undefined;
  const number = Number(value);
  if (!Number.isInteger(number) || number < minimum || number > maximum) throw badRequest(`Expected an integer from ${minimum} to ${maximum}.`);
  return number;
}

function optionalRatio(value) {
  if (value === undefined || value === null || value === '') return undefined;
  const number = Number(value);
  if (!Number.isFinite(number) || number < 0 || number > 1) throw badRequest('Expected a number between 0 and 1.');
  return number;
}

function requiredString(value, name) {
  if (typeof value !== 'string' || !value.trim()) throw badRequest(`${name} is required.`);
  return value;
}

function safeName(value) { return value.replace(/[^a-zA-Z0-9._-]/g, '_'); }
function readReferences(session) { return readJson(join(session.bundle, 'references/index.json'), { references: [] }); }

function writeJson(path, value) { return writeAtomic(path, JSON.stringify(value, null, 2)); }

async function writeAtomic(path, value) {
  const temporary = `${path}.tmp-${randomUUID()}`;
  await writeFile(temporary, value);
  await rename(temporary, path);
}

async function queueReferenceWrite(session, action) {
  const pending = (session.referenceWrite || Promise.resolve()).catch(() => {}).then(action);
  session.referenceWrite = pending;
  try { return await pending; }
  finally { if (session.referenceWrite === pending) delete session.referenceWrite; }
}

function pngBytes(value) {
  if (typeof value !== 'string' || value.length > 90000000) throw badRequest('A PNG image up to 64 MiB is required.');
  const encoded = value.replace(/^data:image\/png;base64,/, '');
  if (!/^[A-Za-z0-9+/]*={0,2}$/.test(encoded)) throw badRequest('PNG data must use base64 encoding.');
  return Buffer.from(encoded, 'base64');
}

async function checkFonts(session) {
  const requirements = (await readJson(join(session.bundle, 'tokens/fonts.json'))).fonts;
  const paths = await fontFiles(session.fontDirectory);
  const fonts = [];
  for (const path of paths) {
    try {
      const opened = openSync(path);
      const family = 'fonts' in opened ? opened.fonts : [opened];
      for (const font of family) fonts.push({ family: font.familyName, style: font.subfamilyName, postscript: font.postscriptName, path });
    } catch {}
  }
  return { ...auditFontRequirements(requirements, fonts), scannedFiles: fonts.length };
}

async function fontFiles(directory) {
  let entries;
  try { entries = await readdir(directory, { withFileTypes: true }); }
  catch (error) { if (error?.code === 'ENOENT') return []; throw error; }
  const nested = await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return fontFiles(path);
    return /\.(ttf|otf|woff2?)$/i.test(entry.name) ? [path] : [];
  }));
  return nested.flat();
}
