import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const commandTypes = [
  ['Z', 0], ['M', 2], ['L', 2], ['Q', 4], ['C', 6]
];

export function decodeCommandPath(bytes) {
  if (!(bytes instanceof Uint8Array)) throw new Error('Command path must contain binary bytes.');
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const commands = [];
  const points = [];
  let offset = 0;
  while (offset < bytes.byteLength) {
    const command = commandTypes[bytes[offset++]];
    if (!command) throw new Error(`Unknown path opcode at byte ${offset - 1}.`);
    const [type, count] = command;
    if (offset + count * 4 > bytes.byteLength) throw new Error(`Truncated ${type} path command at byte ${offset - 1}.`);
    const coordinates = [];
    for (let index = 0; index < count; index++) {
      const value = view.getFloat32(offset, true);
      if (!Number.isFinite(value)) throw new Error(`Non-finite path coordinate at byte ${offset}.`);
      coordinates.push(value);
      offset += 4;
    }
    for (let index = 0; index < coordinates.length; index += 2) points.push([coordinates[index], coordinates[index + 1]]);
    commands.push({ type, coordinates });
  }
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const [x, y] of points) {
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  }
  return {
    path: commands.map(({ type, coordinates }) => type + coordinates.map((value) => Object.is(value, -0) ? '-0' : String(value)).join(' ')).join(' '),
    viewBox: points.length ? [minX, minY, maxX - minX, maxY - minY] : null
  };
}

export function geometryFromMessage(message) {
  const references = new Set();
  const glyphReferences = new Set();
  const pending = [{ value: message.nodeChanges, glyph: false }];
  while (pending.length) {
    const { value, glyph } = pending.pop();
    if (!value || typeof value !== 'object' || value instanceof Uint8Array) continue;
    if (Array.isArray(value)) {
      for (const item of value) pending.push({ value: item, glyph });
      continue;
    }
    for (const [key, item] of Object.entries(value)) {
      if (key === 'commandsBlob') {
        if (!Number.isSafeInteger(item) || item < 0) throw new Error('Command blob reference must be a non-negative integer.');
        references.add(item);
        if (glyph) glyphReferences.add(item);
      } else pending.push({ value: item, glyph: glyph || key === 'glyphs' });
    }
  }
  const commandPaths = {};
  const glyphPaths = {};
  const baseIndex = message.blobBaseIndex ?? 0;
  for (const id of [...references].sort((a, b) => a - b)) {
    const bytes = message.blobs?.[id - baseIndex]?.bytes;
    if (!(bytes instanceof Uint8Array)) throw new Error(`Command blob ${id} is missing binary bytes.`);
    let decoded;
    try {
      decoded = decodeCommandPath(bytes);
    } catch (error) {
      throw new Error(`Unable to decode command blob ${id}: ${error.message}`, { cause: error });
    }
    if (decoded.viewBox) commandPaths[id] = decoded;
    if (glyphReferences.has(id)) glyphPaths[id] = decoded.viewBox ? decoded.path.replace(/^(?:Z ?)+/, '') : '';
  }
  return { commandPaths, glyphPaths };
}

export async function extractGeometry(inputPath, bundleDirectory) {
  const [{ readFigArchive }, { decodeKiwiCanvas }] = await Promise.all([
    import('../../core/dist/archive/read-archive.js'),
    import('../../core/dist/decoder/kiwi.js')
  ]);
  const archive = await readFigArchive(resolve(inputPath));
  const decoded = decodeKiwiCanvas(archive.canvas);
  const { commandPaths, glyphPaths } = geometryFromMessage(decoded.document);
  const outputDirectory = resolve(bundleDirectory);
  await mkdir(outputDirectory, { recursive: true });
  await Promise.all([
    writeFile(resolve(outputDirectory, 'command-paths.json'), JSON.stringify(commandPaths)),
    writeFile(resolve(outputDirectory, 'glyph-paths.json'), JSON.stringify(glyphPaths))
  ]);
  return { commandCount: Object.keys(commandPaths).length, glyphCount: Object.keys(glyphPaths).length };
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const [source, output] = process.argv.slice(2);
  if (!source || !output) throw new Error('Usage: extract-geometry.mjs <input.fig> <bundle-directory>');
  const result = await extractGeometry(source, output);
  process.stdout.write(`Decoded ${result.commandCount} command paths and ${result.glyphCount} glyph paths.\n`);
}
