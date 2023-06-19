import { readdir, access, copyFile, mkdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourceDir = join(__dirname, 'files');
const destDir = join(__dirname, 'files_copy');

const copyDir = async () => {
  const files = await readdir(sourceDir);
  for (let file of files) {
    await copyFile(sourceDir + '/' + file, destDir + '/' + file);
  }
};

const copy = async () => {
  const error = new Error('FS operation failed');

  try {
    await access(sourceDir);
    await mkdir(destDir);
    await copyDir();
  } catch (err) {
    throw error;
  }
};

await copy();
