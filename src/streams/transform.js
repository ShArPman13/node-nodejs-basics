import { Transform } from 'stream';

const transform = async () => {
  const myTransform = new Transform({
    transform(chunk, encoding, cb) {
      const res = chunk.toString().trim().split('').reverse().join('');
      console.log(res);
      cb();
    },
  });

  process.stdin.pipe(myTransform).pipe(process.stdout);
};

await transform();
