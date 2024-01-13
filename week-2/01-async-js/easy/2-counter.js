let counter = 0;

(function main() {
  console.log(`${counter++}`);
  setTimeout(main, 1000);
})();
