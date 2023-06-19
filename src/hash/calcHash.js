import { createHash } from 'node:crypto';

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFile } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const dir = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const file = await readFile(dir, { encoding: 'utf-8' });
  console.log(
    `Hash for file string '${file}' is ${createHash('sha256')
      .update(file)
      .digest('hex')}`
  );
};

await calculateHash();
