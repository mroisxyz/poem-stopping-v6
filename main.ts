// The key stays warm only as long as the engine is left running.
// This poem measures arrival by what is deliberately switched off:
// forty years of idling at the same curb, then one turn of the wrist.
// We write those thirteen lines clean, without a final newline, so
// the last one hangs exactly where he left it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const POEM = `My father left me the key
still warm, the engine running.

I can go anywhere.
That is the trouble.

I sit where he sat,
hand on the key, learning
what he did at this curb
for forty years:

turn the car off
and call it arriving.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, 'entry.txt');
writeFileSync(outPath, POEM, 'utf8');

function describeOutput(outDir: string, chars: number): string {
  return `entry.txt — ${chars} code points → ${outDir}`;
}

console.error(describeOutput(outDir, [...POEM].length));
