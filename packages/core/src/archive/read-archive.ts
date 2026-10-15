import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { open } from 'node:fs/promises';
import { basename } from 'node:path';
import * as yauzl from 'yauzl';
import { detectAssetFormat } from '../assets.js';
import { FigctxError } from '../errors.js';
import {
  defaultArchiveLimits,
  type ArchiveLimits,
  type FigArchive,
  type FigImage
} from './types.js';

const kiwiSignature = new TextEncoder().encode('fig-kiwi');

export async function readFigArchive(
  sourcePath: string,
  limits: ArchiveLimits = defaultArchiveLimits
): Promise<FigArchive> {
  const raw = await readRawFig(sourcePath, limits);
  if (raw) {
    return {
      sourceFilename: basename(sourcePath),
      sourceSha256: raw.sha256,
      meta: {},
      canvas: raw.bytes,
      canvasVariant: 'fig-kiwi',
      images: []
    };
  }

  const zip = await openZip(sourcePath);
  const entries = await readEntries(zip, limits);
  const canvas = entries.get('canvas.fig');

  if (!canvas) {
    throw new FigctxError('MISSING_CANVAS', 'The archive does not contain canvas.fig.');
  }

  if (!hasPrefix(canvas, kiwiSignature)) {
    throw new FigctxError(
      'UNSUPPORTED_FIG_VARIANT',
      'canvas.fig does not use the supported fig-kiwi binary variant.'
    );
  }

  const sourceSha256 = await sha256File(sourcePath);
  const metaBytes = entries.get('meta.json');
  const meta = metaBytes ? parseMeta(metaBytes) : {};
  const images = [...entries]
    .filter(([name]) => name.startsWith('images/'))
    .map(([name, bytes]): FigImage => ({
      hash: name.slice('images/'.length),
      bytes,
      format: detectAssetFormat(bytes)
    }));

  return {
    sourceFilename: basename(sourcePath),
    sourceSha256,
    meta,
    canvas,
    canvasVariant: 'fig-kiwi',
    thumbnail: entries.get('thumbnail.png'),
    images
  };
}

function openZip(sourcePath: string): Promise<yauzl.ZipFile> {
  return new Promise((resolve, reject) => {
    yauzl.open(sourcePath, { lazyEntries: true, autoClose: true }, (error, zip) => {
      if (error || !zip) {
        reject(new FigctxError('INVALID_FIG_ARCHIVE', 'Input is not a readable ZIP archive.', error));
        return;
      }

      resolve(zip);
    });
  });
}

function readEntries(zip: yauzl.ZipFile, limits: ArchiveLimits): Promise<Map<string, Uint8Array>> {
  return new Promise((resolve, reject) => {
    const entries = new Map<string, Uint8Array>();
    let entryCount = 0;
    let totalBytes = 0;
    let finished = false;

    const fail = (error: unknown) => {
      if (finished) return;
      finished = true;
      zip.close();
      reject(error);
    };

    zip.on('error', (error) => fail(new FigctxError('INVALID_FIG_ARCHIVE', 'ZIP archive is malformed.', error)));
    zip.on('end', () => {
      if (!finished) {
        finished = true;
        resolve(entries);
      }
    });
    zip.on('entry', (entry: yauzl.Entry) => {
      void processEntry(entry).catch(fail);
    });

    const processEntry = async (entry: yauzl.Entry) => {
      entryCount += 1;
      if (entryCount > limits.maxEntries) {
        throw new FigctxError('RESOURCE_LIMIT_EXCEEDED', `Archive has more than ${limits.maxEntries} entries.`);
      }

      const name = entry.fileName;
      if (entry.fileName.endsWith('/')) {
        zip.readEntry();
        return;
      }

      if (!isAllowedEntry(name)) {
        throw new FigctxError('INVALID_FIG_ARCHIVE', `Archive contains an unsupported entry path: ${name}`);
      }

      if (entries.has(name)) {
        throw new FigctxError('INVALID_FIG_ARCHIVE', `Archive contains duplicate entry: ${name}`);
      }

      if (entry.uncompressedSize > limits.maxEntryBytes) {
        throw new FigctxError('RESOURCE_LIMIT_EXCEEDED', `Archive entry exceeds ${limits.maxEntryBytes} bytes: ${name}`);
      }

      totalBytes += entry.uncompressedSize;
      if (totalBytes > limits.maxTotalBytes) {
        throw new FigctxError('RESOURCE_LIMIT_EXCEEDED', `Archive exceeds ${limits.maxTotalBytes} uncompressed bytes.`);
      }

      const bytes = await readEntry(zip, entry);
      entries.set(name, bytes);
      zip.readEntry();
    };

    zip.readEntry();
  });
}

function isAllowedEntry(name: string): boolean {
  return (
    name === 'canvas.fig' ||
    name === 'meta.json' ||
    name === 'thumbnail.png' ||
    /^images\/[^/]+$/.test(name)
  );
}

function readEntry(zip: yauzl.ZipFile, entry: yauzl.Entry): Promise<Uint8Array> {
  return new Promise((resolve, reject) => {
    zip.openReadStream(entry, (error, stream) => {
      if (error || !stream) {
        reject(new FigctxError('INVALID_FIG_ARCHIVE', `Cannot read archive entry: ${entry.fileName}`, error));
        return;
      }

      const chunks: Buffer[] = [];
      stream.on('data', (chunk: Buffer) => chunks.push(chunk));
      stream.once('error', reject);
      stream.once('end', () => resolve(new Uint8Array(Buffer.concat(chunks))));
    });
  });
}

function parseMeta(bytes: Uint8Array): Record<string, unknown> {
  try {
    const value: unknown = JSON.parse(new TextDecoder().decode(bytes));
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
      throw new Error('meta.json must contain an object');
    }
    return value as Record<string, unknown>;
  } catch (error) {
    throw new FigctxError('INVALID_FIG_ARCHIVE', 'meta.json is not valid JSON object.', error);
  }
}

function hasPrefix(bytes: Uint8Array, prefix: Uint8Array): boolean {
  return prefix.every((byte, index) => bytes[index] === byte);
}

async function readRawFig(path: string, limits: ArchiveLimits): Promise<{ bytes: Uint8Array; sha256: string } | undefined> {
  let handle: Awaited<ReturnType<typeof open>> | undefined;
  try {
    handle = await open(path, 'r');
    const prefix = new Uint8Array(kiwiSignature.byteLength);
    let prefixLength = 0;
    while (prefixLength < prefix.byteLength) {
      const result = await handle.read(prefix, prefixLength, prefix.byteLength - prefixLength, prefixLength);
      if (result.bytesRead === 0) break;
      prefixLength += result.bytesRead;
    }
    if (!hasPrefix(prefix.subarray(0, prefixLength), kiwiSignature)) return undefined;

    const { size } = await handle.stat();
    if (size > limits.maxTotalBytes) {
      throw new FigctxError('RESOURCE_LIMIT_EXCEEDED', `Raw .fig stream exceeds ${limits.maxTotalBytes} bytes.`);
    }

    const buffer = Buffer.allocUnsafe(size);
    let offset = 0;
    while (offset < size) {
      const result = await handle.read(buffer, offset, size - offset, offset);
      if (result.bytesRead === 0) break;
      offset += result.bytesRead;
    }
    const bytes = new Uint8Array(buffer.subarray(0, offset));
    const finalSize = (await handle.stat()).size;
    if (offset !== size || finalSize !== size || !hasPrefix(bytes, kiwiSignature)) {
      throw new FigctxError('INVALID_FIG_ARCHIVE', 'Input changed while it was being read.');
    }
    return { bytes, sha256: createHash('sha256').update(bytes).digest('hex') };
  } catch (error) {
    if (error instanceof FigctxError) throw error;
    throw new FigctxError('INVALID_FIG_ARCHIVE', 'Cannot read input file.', error);
  } finally {
    await handle?.close();
  }
}

function sha256File(path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const hash = createHash('sha256');
    const stream = createReadStream(path);
    stream.on('error', (error) => reject(new FigctxError('INVALID_FIG_ARCHIVE', 'Cannot read input file.', error)));
    stream.on('data', (chunk: string | Buffer) => hash.update(chunk));
    stream.on('end', () => resolve(hash.digest('hex')));
  });
}
