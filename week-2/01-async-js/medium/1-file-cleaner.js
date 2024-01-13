const { readFile, writeFile } = require("fs/promises");

const main = async (filePath) => {
  const fileContent = (await readFile(filePath)).toString();

  const cleanedFileContent = fileContent.replace(/\s+/g, " ");

  await writeFile(filePath, cleanedFileContent);
};

main(`./1-file-cleaner.example`);
