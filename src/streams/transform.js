import { Transform } from 'stream';

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, encoding, cb) {
      const res = chunk.toString().trim().split('').reverse().join('');
      this.push(res + '\n');
      cb();
    },
  });

  process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();
