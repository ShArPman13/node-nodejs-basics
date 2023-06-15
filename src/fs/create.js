import { appendFile, access } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const create = async () => {
  const dir = join(__dirname, 'files', 'fresh.txt');
  const error = Error('FS operation failed');

  try {
    await access(dir);
    throw error;
  } catch (err) {
    if (err === error) {
      throw err;
    }
    appendFile(dir, 'I am fresh and young');
  }
};

await create();
