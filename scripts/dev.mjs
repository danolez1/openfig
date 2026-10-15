import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const repoRoot = fileURLToPath(new URL('..', import.meta.url));
let active;
let stopping = false;
for (const signal of ['SIGINT', 'SIGTERM']) process.once(signal, () => {
  stopping = true;
  active?.kill(signal);
});

try {
  await run('pnpm', ['run', 'build']);
  if (!stopping) await run(process.execPath, ['packages/openfig/src/cli.mjs', 'serve', ...process.argv.slice(2)]);
} catch (error) {
  process.stderr.write(`openfig dev: ${error.message}\n`);
  process.exitCode = 1;
}

function run(command, args) {
  return new Promise((resolve, reject) => {
    active = spawn(command, args, { cwd: repoRoot, stdio: 'inherit' });
    active.once('error', reject);
    active.once('exit', (code, signal) => {
      if (stopping || code === 0) resolve();
      else reject(new Error(`${command} exited with ${signal || code}.`));
    });
  });
}
