import { access, readdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileFolder = join(__dirname, 'files');

const error = new Error('FS operation failed');

const list = async () => {
  try {
    await access(fileFolder);
    const files = await readdir(fileFolder);
    console.table(files);
  } catch {
    throw error;
  }
};

await list();
