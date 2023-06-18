import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const file = join(__dirname, 'files', 'fileToCompress.txt');
const fileStream = createWriteStream(file);

const compressedFile = join(__dirname, 'files', 'archive.gz');
const compressedFileStream = createReadStream(compressedFile);

const decompress = async () => {
  compressedFileStream.pipe(createUnzip()).pipe(fileStream);
};

await decompress();
