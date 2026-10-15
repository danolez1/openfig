#!/usr/bin/env node
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { createBundleMcpServer } from './server.js';

const root = argument('--root');
if (!root) throw new Error('Usage: figctx-mcp --root <bundle-directory>');
const server = await createBundleMcpServer(root);
await server.connect(new StdioServerTransport());

function argument(name: string) {
  const index = process.argv.indexOf(name);
  return index < 0 ? undefined : process.argv[index + 1];
}
