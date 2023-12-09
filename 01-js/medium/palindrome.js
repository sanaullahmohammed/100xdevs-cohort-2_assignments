/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;

  if (str.length === 1) {
    return true;
  }

  while (start <= end) {
    while (!isAlphanumeric(str[start]) && start <= end) {
      start++;
    }

    while (!isAlphanumeric(str[end]) && start <= end) {
      end--;
    }

    if (str[start].toLowerCase() !== str[end].toLowerCase()) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}

function isAlphanumeric(char) {
  return char.match(/^[a-zA-Z0-9]+$/i) !== null;
}

module.exports = isPalindrome;
