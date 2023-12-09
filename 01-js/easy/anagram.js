/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const normalizeString = (str) => str.toLowerCase();

  const countCharacterFrequency = (str) => {
    const charFreqMap = new Object();

    for (let char of str) {
      charFreqMap[char] = (charFreqMap[char] || 0) + 1;
    }

    return charFreqMap;
  };

  const compareFrequencyMaps = (map1, map2) => {
    for (let key in map1) {
      if (map1[key] !== map2[key]) {
        return false;
      }
    }
    return true;
  };

  const normalizedStr1 = normalizeString(str1);
  const normalizedStr2 = normalizeString(str2);

  const freqMap1 = countCharacterFrequency(normalizedStr1);
  const freqMap2 = countCharacterFrequency(normalizedStr2);

  return compareFrequencyMaps(freqMap1, freqMap2);
}

module.exports = isAnagram;
