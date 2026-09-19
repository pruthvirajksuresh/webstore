import { copyFile, mkdir, readFile, rm } from 'node:fs/promises';
import { Script } from 'node:vm';

const source = 'medicine_catalog_expanded_research_v2.html';
const html = await readFile(source, 'utf8');
if (!html.includes('<!doctype html>') || !html.includes('</html>')) {
  throw new Error('The catalog must be a complete HTML document.');
}
for (const [, script] of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)) {
  new Script(script);
}
await rm('dist', { recursive: true, force: true });
await mkdir('dist/client', { recursive: true });
await mkdir('dist/server', { recursive: true });
await copyFile(source, 'dist/client/index.html');
await copyFile('worker/index.js', 'dist/server/index.js');
console.log('Catalog validated and built in dist/.');
