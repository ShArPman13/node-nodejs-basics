import { rename as renameFile, access } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const oldFile = join(__dirname, 'files', 'wrongFilename.txt');
const newFile = join(__dirname, 'files', 'properFilename.md');

const error = new Error('FS operation failed');

const rename = async () => {
  try {
    await access(newFile);
    throw error;
  } catch (err) {
    if (err !== error) {
      try {
        await renameFile(oldFile, newFile);
      } catch {
        throw error;
      }
    } else throw error;
  }
};

await rename();
