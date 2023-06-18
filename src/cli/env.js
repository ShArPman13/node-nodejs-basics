const parseEnv = () => {
  const prefix = 'RSS_';
  const env = process.env;
  const entries = Object.entries(env);
  const entriesRSS = entries
    .filter((el) => el[0].includes(prefix))
    .map((elem) => `${elem[0]}=${elem[1]}`);
  console.log(entriesRSS.join('; '));
};

parseEnv();
