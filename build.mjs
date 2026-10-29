import { cp, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const outputFlag = args.indexOf('--outdir');
const output = path.resolve(root, outputFlag >= 0 ? args[outputFlag + 1] || 'dist' : 'dist');
if (output === root || output === path.join(root, 'assets')) throw new Error('构建输出不能覆盖源文件。');
await mkdir(output, { recursive: true });
await cp(path.join(root, 'index.html'), path.join(output, 'index.html'));
await cp(path.join(root, 'assets'), path.join(output, 'assets'), { recursive: true });
await cp(path.join(root, '.nojekyll'), path.join(output, '.nojekyll'));
console.log(`Static site built: ${output}`);
