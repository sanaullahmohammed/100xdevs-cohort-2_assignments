const { readFile } = require("fs/promises");

const main = async () => {
  const x = await readFile(`./3-read-from-file.md`);
  for (let i = 0; i < 9999999999; i++); // expensive function
  console.log(x.toString());
};

main();
