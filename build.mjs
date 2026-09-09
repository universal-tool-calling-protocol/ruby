import { cp, mkdir } from 'node:fs/promises';
import { relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const source = fileURLToPath(new URL('../website/', import.meta.url));
const destination = fileURLToPath(new URL('../dist/', import.meta.url));
const excluded = new Set(['node_modules', 'package.json', 'README.md']);

await mkdir(destination, { recursive: true });
await cp(source, destination, {
  recursive: true,
  filter(path) {
    return !relative(source, path).split(sep).some(
      (part) => excluded.has(part) || part.startsWith('.'),
    );
  },
});

console.log('Built Ruby UTCP website in dist/');
