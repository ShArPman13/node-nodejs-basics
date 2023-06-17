import { access, unlink } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'files', 'fileToRemove.txt');

const error = new Error('FS operation failed');

const remove = async () => {
  try {
    await access(file);
    await unlink(file);
  } catch {
    throw error;
  }
};

await remove();
