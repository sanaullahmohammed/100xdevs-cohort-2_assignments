const { writeFile, readFile } = require("fs/promises");

const main = async () => {
  const content = await readFile(`./4-write-to-file.md`);

  const newContent = `\n*****This is the new content!*****\n`;

  await writeFile(`./4-write-to-file.temp`, content + newContent);
};

main();
