import { constants } from 'node:fs';
import { access, copyFile, mkdir, mkdtemp, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { tmpdir } from 'node:os';
import { basename, dirname, extname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { extractGeometry } from './extract-geometry.mjs';

const packageRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));
const repoRoot = resolve(packageRoot, '../..');
const figctxCli = join(repoRoot, 'packages/cli/dist/main.js');
const flattenScript = join(packageRoot, 'src/extract-flat.mjs');
const renderer = join(packageRoot, 'renderer.py');
const defaultFonts = join(packageRoot, 'fonts/local');

export async function convertFile(inputPath, outputPath, options = {}) {
  const input = resolve(inputPath);
  const output = resolve(outputPath);
  if (extname(input).toLowerCase() !== '.fig') throw new Error('Input file must use the .fig extension.');
  if (input === output) throw new Error('Input and output paths must differ.');
  const inputStat = await stat(input);
  if (!inputStat.isFile()) throw new Error('Input path must be a file.');
  if (!options.force) {
    try {
      await access(output);
      throw new Error('Output file already exists. Pass --force to replace it.');
    } catch (error) {
      if (error?.code !== 'ENOENT') throw error;
    }
  }
  await mkdir(dirname(output), { recursive: true });
  const workRoot = await mkdtemp(join(tmpdir(), 'openfig-'));
  const bundle = options.bundleDirectory ? resolve(options.bundleDirectory) : join(workRoot, 'bundle');
  const flattened = join(bundle, 'flattened-nodes.json');
  const fontCss = join(workRoot, 'fonts.css');
  const rendered = join(workRoot, 'preview.html');
  try {
    await extractBundle(input, bundle);
    await run(process.execPath, [flattenScript, input, flattened]);
    const fontDir = resolve(options.fontDir || process.env.OPENFIG_FONT_DIR || defaultFonts);
    const css = await buildFontCss(fontDir);
    if (css) await writeFile(fontCss, css);
    const args = [
      renderer,
      '--bundle', bundle,
      '--flattened', flattened,
      '--output', rendered,
      '--source-name', options.sourceName || basename(input)
    ];
    if (css) args.push('--font-css', fontCss);
    await run(process.env.PYTHON || 'python3', args);
    const manifest = JSON.parse(await readFile(join(bundle, 'manifest.json'), 'utf8'));
    const htmlStat = await stat(rendered);
    await copyFile(rendered, output, options.force ? 0 : constants.COPYFILE_EXCL);
    return {
      input: basename(input),
      output,
      parserVersion: manifest.parserVersion,
      canvasVariant: manifest.canvasVariant,
      nodeCount: manifest.nodeCount,
      sourceSha256: manifest.sourceSha256,
      htmlBytes: htmlStat.size,
      fontDirectory: fontDir
    };
  } finally {
    await rm(workRoot, { recursive: true, force: true });
  }
}

export async function extractBundle(inputPath, outputDirectory) {
  const input = resolve(inputPath);
  const output = resolve(outputDirectory);
  if (extname(input).toLowerCase() !== '.fig') throw new Error('Input file must use the .fig extension.');
  await run(process.execPath, [figctxCli, 'extract', input, '--out', output]);
  await extractGeometry(input, output);
  return output;
}

async function buildFontCss(fontDir) {
  const manifestPath = join(fontDir, 'manifest.json');
  let entries;
  try {
    entries = JSON.parse(await readFile(manifestPath, 'utf8'));
  } catch (error) {
    if (error?.code === 'ENOENT') return '';
    throw error;
  }
  if (!Array.isArray(entries)) throw new Error('Font manifest must be a JSON array.');
  const root = resolve(fontDir);
  const rules = [];
  for (const font of entries) {
    if (!font || typeof font.family !== 'string' || typeof font.file !== 'string') throw new Error('Each font entry needs family and file strings.');
    const path = resolve(root, font.file);
    if (!path.startsWith(root + sep) && path !== root) throw new Error('Font file path must stay inside the font directory.');
    const bytes = await readFile(path);
    const extension = extname(path).toLowerCase();
    const mime = extension === '.woff2' ? 'font/woff2' : extension === '.woff' ? 'font/woff' : extension === '.otf' ? 'font/otf' : 'font/ttf';
    const format = extension === '.woff2' ? 'woff2' : extension === '.woff' ? 'woff' : extension === '.otf' ? 'opentype' : 'truetype';
    const family = font.family.replaceAll('\\', '\\\\').replaceAll("'", "\\'");
    const style = font.style === 'italic' ? 'italic' : 'normal';
    const weight = String(font.weight || 400);
    rules.push(`@font-face{font-family:'${family}';font-style:${style};font-weight:${weight};font-display:swap;src:url(data:${mime};base64,${bytes.toString('base64')}) format('${format}')}`);
  }
  return rules.join('\n');
}

function run(command, args) {
  return new Promise((resolvePromise, reject) => {
    const child = spawn(command, args, { cwd: repoRoot, stdio: ['ignore', 'pipe', 'pipe'] });
    const stdout = [];
    const stderr = [];
    child.stdout.on('data', (chunk) => stdout.push(chunk));
    child.stderr.on('data', (chunk) => stderr.push(chunk));
    child.once('error', reject);
    child.once('close', (code) => {
      if (code === 0) return resolvePromise(Buffer.concat(stdout).toString('utf8'));
      const detail = Buffer.concat(stderr).toString('utf8').trim() || Buffer.concat(stdout).toString('utf8').trim();
      reject(new Error(detail || `${basename(command)} exited with code ${code}.`));
    });
  });
}
