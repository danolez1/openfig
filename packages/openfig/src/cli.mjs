#!/usr/bin/env node
import { spawn } from 'node:child_process';
import { access } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { convertFile, extractBundle } from './pipeline.mjs';
import { startServer } from './server.mjs';

const repoRoot = resolve(fileURLToPath(new URL('../../..', import.meta.url)));
const args = process.argv.slice(2);
if (args[0] === '--') args.shift();
const command = args.shift();

try {
  if (command === 'convert') {
    const input = args.shift();
    const output = takeOption(args, '--output', '-o');
    const fonts = takeOption(args, '--fonts');
    const force = args.includes('--force');
    if (!input || !output || args.some((arg) => arg.startsWith('-') && arg !== '--force')) throw new Error('Usage: openfig convert <input.fig> --output <output.html> [--fonts <directory>] [--force]');
    const result = await convertFile(input, output, { fontDir: fonts, force });
    process.stdout.write(JSON.stringify(result, null, 2) + '\n');
  } else if (command === 'extract') {
    const input = args.shift();
    const output = takeOption(args, '--output', '-o');
    if (!input || !output || args.length) throw new Error('Usage: openfig extract <input.fig> --output <bundle-directory>');
    process.stdout.write(await extractBundle(input, output) + '\n');
  } else if (command === 'serve') {
    const host = takeOption(args, '--host') || '127.0.0.1';
    const port = Number(takeOption(args, '--port') || 8787);
    const fonts = takeOption(args, '--fonts');
    if (!Number.isInteger(port) || port < 1 || port > 65535 || args.length) throw new Error('Usage: openfig serve [--host <host>] [--port <port>] [--fonts <directory>]');
    const server = startServer({ host, port, fontDir: fonts });
    for (const signal of ['SIGINT', 'SIGTERM']) process.once(signal, () => {
      server.close();
      server.closeIdleConnections();
    });
  } else if (command === 'mcp') {
    const root = takeOption(args, '--root');
    if (!root || args.length) throw new Error('Usage: openfig mcp --root <extracted-bundle>');
    await access(root);
    const mcp = resolve(repoRoot, 'packages/cli/dist/mcp.js');
    const child = spawn(process.execPath, [mcp, '--root', resolve(root)], { stdio: 'inherit' });
    child.once('exit', (code) => { process.exitCode = code || 0; });
    for (const signal of ['SIGINT', 'SIGTERM']) process.once(signal, () => child.kill(signal));
  } else if (command === 'connect-figma') {
    const name = takeOption(args, '--name') || 'figma-openfig';
    if (args.length) throw new Error('Usage: openfig connect-figma [--name <server-name>]');
    const child = spawn('codex', ['mcp', 'add', name, '--url', 'https://mcp.figma.com/mcp'], { stdio: 'inherit' });
    const code = await new Promise((resolvePromise, reject) => {
      child.once('error', reject);
      child.once('exit', (exitCode, signal) => signal ? reject(new Error(`Codex MCP setup exited with ${signal}.`)) : resolvePromise(exitCode ?? 1));
    });
    if (code !== 0) process.exitCode = code;
  } else {
    printHelp();
    if (command && command !== 'help' && command !== '--help' && command !== '-h') process.exitCode = 2;
  }
} catch (error) {
  process.stderr.write(`openfig: ${error.message}\n`);
  process.exitCode = 1;
}

function takeOption(values, longName, shortName) {
  const index = values.findIndex((value) => value === longName || value === shortName);
  if (index < 0) return undefined;
  const value = values[index + 1];
  if (!value || value.startsWith('--')) throw new Error(`${longName} requires a value.`);
  values.splice(index, 2);
  return value;
}

function printHelp() {
  process.stdout.write([
    'Openfig, local Figma file converter',
    '',
    '  openfig convert <input.fig> --output <output.html> [--fonts <directory>] [--force]',
    '  openfig extract <input.fig> --output <bundle-directory>',
    '  openfig serve [--host 127.0.0.1] [--port 8787] [--fonts <directory>]',
    '  openfig mcp --root <extracted-bundle>',
    '  openfig connect-figma [--name <server-name>]',
    ''
  ].join('\n'));
}
