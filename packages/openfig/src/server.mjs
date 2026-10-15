import { createReadStream, createWriteStream } from 'node:fs';
import { mkdtemp, readdir, rm, stat } from 'node:fs/promises';
import { once } from 'node:events';
import { randomUUID } from 'node:crypto';
import { createServer } from 'node:http';
import { isIP } from 'node:net';
import { finished, pipeline } from 'node:stream/promises';
import { basename, extname, join } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { ZipFile } from 'yazl';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { createBundleMcpServer } from '../../mcp-server/dist/server.js';
import { convertFile } from './pipeline.mjs';
import { badRequest, bundlePath, mcpTools, operations, optionalInteger, readAssets, readDocument, readJson, readTokens, runAction } from './api.mjs';

const packageRoot = fileURLToPath(new URL('..', import.meta.url));
const pagePath = join(packageRoot, 'web/index.html');
const maxBytes = Number(process.env.OPENFIG_MAX_UPLOAD_BYTES ?? 1073741824);
const maxJsonBytes = 100 * 1024 * 1024;
if (!Number.isSafeInteger(maxBytes) || maxBytes < 1) throw new Error('OPENFIG_MAX_UPLOAD_BYTES must be a positive safe integer.');

export function startServer({ host = '127.0.0.1', port = 8787, fontDir } = {}) {
  const documents = new Map();
  const server = createServer(async (request, response) => {
    try {
      const url = new URL(request.url || '/', 'http://localhost');
      const authority = request.headers.host;
      let hostname;
      try { hostname = authority ? new URL(`http://${authority}`).hostname : ''; }
      catch { throw badRequest('Invalid request Host header.'); }
      if (isLoopbackHost(host) && !isLoopbackHost(hostname)) {
        return json(response, 403, { error: 'HOST_NOT_ALLOWED', message: 'Use a loopback hostname for this local Openfig server.' });
      }
      const origin = request.headers.origin;
      if (origin && origin !== `http://${request.headers.host}` && origin !== `https://${request.headers.host}`) {
        return json(response, 403, { error: 'ORIGIN_NOT_ALLOWED', message: 'Requests must come from this Openfig app.' });
      }
      if (request.method === 'GET' && url.pathname === '/') return await sendFile(response, pagePath, 'text/html; charset=utf-8');
      if (request.method === 'GET' && url.pathname === '/favicon.ico') { response.writeHead(204); response.end(); return; }
      if (request.method === 'GET' && url.pathname === '/healthz') return json(response, 200, { ok: true });
      if (request.method === 'GET' && url.pathname === '/api/tools') {
        return json(response, 200, { operations, mcpTools, routes: { app: '/', health: '/healthz', documents: '/api/documents', metadata: '/api/documents/:id/metadata', nodes: '/api/documents/:id/nodes', context: '/api/documents/:id/context', tokens: '/api/documents/:id/tokens', assets: '/api/documents/:id/assets', actions: '/api/documents/:id/actions', preview: '/api/documents/:id/preview', download: '/api/documents/:id/download', bundle: '/api/documents/:id/bundle', files: '/api/documents/:id/files/:path', convert: '/api/convert', mcp: '/mcp/:documentId', tools: '/api/tools' } });
      }
      if (request.method === 'GET' && url.pathname === '/api/documents') return json(response, 200, { documents: [...documents.values()].map(publicDocument) });
      if (request.method === 'POST' && (url.pathname === '/api/documents' || url.pathname === '/api/convert')) {
        const session = await acceptDocument(request, fontDir);
        if (url.pathname === '/api/documents') {
          documents.set(session.id, session);
          return json(response, 201, publicDocument(session));
        }
        try { await sendFile(response, session.output, 'text/html; charset=utf-8', safeFilename(session.name.replace(/\.fig$/i, '') + '-interactive.html'), session.manifest.sourceSha256); }
        finally { await rm(session.work, { recursive: true, force: true }); }
        return;
      }
      const mcpMatch = url.pathname.match(/^\/mcp\/([a-f0-9-]+)$/);
      if (mcpMatch) {
        const session = documents.get(mcpMatch[1]);
        if (!session) return missingDocument(response);
        const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined, enableJsonResponse: true });
        const mcpServer = await createBundleMcpServer(session.bundle, { candidateRoot: session.bundle });
        response.once('close', () => { void transport.close(); void mcpServer.close(); });
        await mcpServer.connect(transport);
        const body = request.method === 'POST' ? await readBodyJson(request, 2 * 1024 * 1024) : undefined;
        await transport.handleRequest(request, response, body);
        return;
      }
      const documentMatch = url.pathname.match(/^\/api\/documents\/([a-f0-9-]+)(?:\/(.*))?$/);
      if (!documentMatch) return json(response, 404, { error: 'NOT_FOUND', message: 'Route not found.' });
      const session = documents.get(documentMatch[1]);
      if (!session) return missingDocument(response);
      const route = documentMatch[2] || 'metadata';
      if (request.method === 'GET') {
        if (route === 'metadata') return json(response, 200, { ...publicDocument(session), manifest: session.manifest });
        if (route === 'preview') return await sendFile(response, session.output, 'text/html; charset=utf-8');
        if (route === 'bundle') return await sendBundle(response, session);
        if (route === 'download') return await sendFile(response, session.output, 'text/html; charset=utf-8', safeFilename(session.name.replace(/\.fig$/i, '') + '-interactive.html'));
        if (route === 'tokens') return json(response, 200, await readTokens(session));
        if (route === 'assets') return json(response, 200, await readAssets(session));
        if (route === 'context') return json(response, 200, await runAction(session, { operation: 'pack', reference: url.searchParams.get('reference') }));
        if (route === 'nodes') {
          const reference = url.searchParams.get('reference');
          if (reference) return json(response, 200, await runAction(session, { operation: 'inspect-node', reference, depth: url.searchParams.get('depth'), maxChildren: url.searchParams.get('maxChildren') }));
          const query = url.searchParams.get('query');
          if (query) return json(response, 200, await runAction(session, { operation: 'search', query, type: url.searchParams.get('type') || undefined, limit: url.searchParams.get('limit') }));
          const limit = optionalInteger(url.searchParams.get('limit'), 1, 10000) ?? 200;
          const document = await readDocument(session);
          const type = url.searchParams.get('type')?.toUpperCase();
          const nodes = Object.values(document.nodesById).filter((node) => type ? node.type === type : node.type === 'FRAME' || node.type === 'CANVAS');
          return json(response, 200, { nodes: nodes.slice(0, limit) });
        }
        if (route.startsWith('assets/')) {
          const hash = route.slice(7);
          if (!/^[a-f0-9]{40}$/.test(hash)) throw badRequest('Asset hash must contain 40 lowercase hexadecimal characters.');
          const asset = (await readAssets(session)).find((entry) => entry.hash === hash);
          if (!asset) return json(response, 404, { error: 'NOT_FOUND', message: 'Asset not found.' });
          return await sendFile(response, bundlePath(session, asset.path), mimeType(asset.path));
        }
        if (route.startsWith('files/')) {
          const path = decodeURIComponent(route.slice(6));
          return await sendFile(response, bundlePath(session, path), mimeType(path));
        }
      }
      if (request.method === 'POST' && route === 'actions') return json(response, 200, await runAction(session, await readBodyJson(request, maxJsonBytes)));
      if (request.method === 'DELETE' && route === 'metadata') {
        documents.delete(session.id);
        await rm(session.work, { recursive: true, force: true });
        return json(response, 200, { removed: session.id });
      }
      return json(response, 404, { error: 'NOT_FOUND', message: 'Route not found.' });
    } catch (error) {
      const errorCode = request.url?.split('?')[0] === '/api/convert' ? 'CONVERSION_FAILED' : 'REQUEST_FAILED';
      if (!response.headersSent) json(response, conversionStatus(error), { error: errorCode, message: error.message });
      else response.destroy(error);
    }
  });
  server.once('close', () => {
    void Promise.allSettled([...documents.values()].map((session) => rm(session.work, { recursive: true, force: true })));
    documents.clear();
  });
  server.listen(port, host, () => {
    const displayHost = isIP(host) === 6 ? `[${host}]` : host;
    process.stdout.write(`Openfig listening at http://${displayHost}:${server.address().port}\n`);
  });
  return server;
}

function isLoopbackHost(value) {
  const hostname = value.toLowerCase().replace(/^\[|\]$/g, '').replace(/\.$/, '');
  if (hostname === 'localhost') return true;
  if (isIP(hostname) === 4) return hostname.startsWith('127.');
  if (isIP(hostname) !== 6) return false;
  const canonical = new URL(`http://[${hostname}]/`).hostname;
  return canonical === '[::1]' || /^\[::ffff:7f[0-9a-f]{2}:[0-9a-f]{1,4}\]$/.test(canonical);
}

async function acceptDocument(request, fontDir) {
  const work = await mkdtemp(join(tmpdir(), 'openfig-upload-'));
  const input = join(work, 'input.fig');
  const output = join(work, 'preview.html');
  const bundle = join(work, 'bundle');
  try {
    const rawName = decodeURIComponent(request.headers['x-filename'] || 'design.fig');
    const name = basename(rawName);
    if (extname(name).toLowerCase() !== '.fig') throw new Error('Uploaded file must use the .fig extension.');
    await saveRequest(request, input);
    const result = await convertFile(input, output, { fontDir, sourceName: name, bundleDirectory: bundle });
    const manifest = await readJson(join(bundle, 'manifest.json'));
    const document = await readJson(join(bundle, 'document.agent.json'));
    const pageCount = Object.values(document.nodesById).filter((node) => node.type === 'CANVAS').length;
    return { id: randomUUID(), name, work, input, output, bundle, manifest, fontDirectory: result.fontDirectory, summary: { nodeCount: result.nodeCount, pageCount, sourceSha256: result.sourceSha256, htmlBytes: result.htmlBytes } };
  } catch (error) {
    await rm(work, { recursive: true, force: true });
    throw error;
  }
}

function publicDocument(session) {
  const base = `/api/documents/${session.id}`;
  return { id: session.id, name: session.name, summary: session.summary, previewUrl: `${base}/preview`, downloadUrl: `${base}/download`, metadataUrl: `${base}/metadata`, bundleUrl: `${base}/bundle`, mcpUrl: `/mcp/${session.id}` };
}

function json(response, status, value) {
  response.writeHead(status, { 'content-type': 'application/json; charset=utf-8' });
  response.end(JSON.stringify(value));
}

function missingDocument(response) { return json(response, 404, { error: 'DOCUMENT_NOT_FOUND', message: 'Upload a .fig file in this running Openfig app first.' }); }

async function sendFile(response, path, contentType, downloadName, sourceSha256) {
  const metadata = await stat(path);
  response.writeHead(200, { 'content-type': contentType, 'content-length': metadata.size, ...(downloadName ? { 'content-disposition': `attachment; filename="${downloadName}"` } : {}), ...(sourceSha256 ? { 'x-openfig-source-sha256': sourceSha256 } : {}) });
  await pipeline(createReadStream(path), response);
}

async function sendBundle(response, session) {
  const zip = new ZipFile();
  zip.on('error', (error) => zip.outputStream.destroy(error));
  const files = [];
  await visit(session.bundle, '');
  for (const file of files) zip.addFile(join(session.bundle, file), file);
  response.writeHead(200, { 'content-type': 'application/zip', 'content-disposition': `attachment; filename="${safeFilename(session.name.replace(/\.fig$/i, '') + '-bundle.zip')}"` });
  const sending = pipeline(zip.outputStream, response);
  zip.end();
  await sending;

  async function visit(directory, prefix) {
    const entries = await readdir(directory, { withFileTypes: true });
    for (const entry of entries) {
      const path = prefix ? `${prefix}/${entry.name}` : entry.name;
      if (entry.isDirectory()) await visit(join(directory, entry.name), path);
      else if (entry.isFile()) files.push(path);
    }
  }
}

function conversionStatus(error) {
  if (Number.isInteger(error?.status)) return error.status;
  const message = String(error?.message ?? error);
  if (message.startsWith('Upload exceeds ') || /(?:^|\n)ERROR RESOURCE_LIMIT_EXCEEDED:/.test(message)) return 413;
  if (error?.name === 'URIError' || error?.name === 'SyntaxError') return 400;
  if (error?.code === 'ENOENT') return 404;
  if (message === 'Upload body is empty.' || message === 'Uploaded file must use the .fig extension.' || error?.code === 'NODE_NOT_FOUND' || error?.code === 'INVALID_REFERENCE_IMAGE' || error?.code === 'REFERENCE_IMAGE_DIMENSION_MISMATCH' || /(?:^|\n)ERROR (?:INVALID_FIG_ARCHIVE|MISSING_CANVAS|UNSUPPORTED_FIG_VARIANT|CORRUPT_KIWI_CHUNK):/.test(message)) return 422;
  return 500;
}

async function readBodyJson(request, limit) {
  const chunks = [];
  let bytes = 0;
  for await (const chunk of request) {
    bytes += chunk.length;
    if (bytes > limit) throw Object.assign(new Error(`JSON body exceeds ${limit} bytes.`), { status: 413 });
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

async function saveRequest(request, outputPath) {
  const length = Number(request.headers['content-length'] || 0);
  if (length > maxBytes) throw new Error(`Upload exceeds the ${maxBytes} byte limit.`);
  const output = createWriteStream(outputPath, { flags: 'wx' });
  let received = 0;
  try {
    for await (const chunk of request) {
      received += chunk.length;
      if (received > maxBytes) throw new Error(`Upload exceeds the ${maxBytes} byte limit.`);
      if (!output.write(chunk)) await once(output, 'drain');
    }
    output.end();
    await finished(output);
    if (!received) throw new Error('Upload body is empty.');
  } catch (error) { output.destroy(); throw error; }
}

function mimeType(path) {
  return ({ '.html': 'text/html; charset=utf-8', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif', '.md': 'text/markdown; charset=utf-8' })[extname(path).toLowerCase()] || 'application/octet-stream';
}

function safeFilename(value) { return value.replace(/[\\\/\r\n"]/g, '_').replace(/[^a-zA-Z0-9._-]/g, '_'); }
