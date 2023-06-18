import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const file = join(__dirname, 'files', 'fileToCompress.txt');
const fileStream = createReadStream(file);

const compressedFile = join(__dirname, 'files', 'archive.gz');
const compressedFileStream = createWriteStream(compressedFile);

const compress = async () => {
  fileStream.pipe(createGzip()).pipe(compressedFileStream);
};

await compress();
