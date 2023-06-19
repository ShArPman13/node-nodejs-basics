import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import readline from 'readline';

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
  const writeStream = createWriteStream(file);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Enter text' + '\n',
  });

  rl.prompt();

  rl.on('line', (line) => {
    if (line.trim() === 'exit') {
      rl.close();
    }
  });

  process.stdin.pipe(writeStream);
};

await write();
