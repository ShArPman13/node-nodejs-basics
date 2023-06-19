import { access, readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'files', 'fileToRead.txt');

const error = new Error('FS operation failed');

const read = async () => {
  readFile(file, { encoding: 'utf8' })
    .then((text) => console.log(text))
    .catch(() => {
      throw error;
    });
};

await read();
