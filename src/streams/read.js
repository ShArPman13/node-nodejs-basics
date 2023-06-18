import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  const readStream = createReadStream(file, 'utf-8');
  readStream.on('data', (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();
