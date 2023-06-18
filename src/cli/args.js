const parseArgs = () => {
  const args = process.argv;
  const resultArray = [];

  for (let i = 2; i < args.length; i++) {
    if (i % 2 === 0) {
      resultArray.push(`${args[i].slice(2)} is ${args[i + 1]}`);
    }
  }
  console.log(resultArray.join(', '));
};

parseArgs();
