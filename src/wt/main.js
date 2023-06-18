import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const workerPath = join(__dirname, 'worker.js');

const performCalculations = async () => {
  const cores = cpus();

  const res = await Promise.allSettled(
    cores.map(
      (_, i) =>
        new Promise((res, rej) => {
          const n = 10 + i;
          const worker = new Worker(workerPath, {
            workerData: n,
          });
          worker.on('message', (msg) => {
            res(msg);
          });
          worker.on('error', (msg) => {
            rej(msg);
          });
        })
    )
  );

  res.forEach(({ status, value }) =>
    console.log({
      status: status === 'fulfilled' ? 'resolved' : 'error',
      data: value || null,
    })
  );
};

await performCalculations();
