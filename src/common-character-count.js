const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const counts = {};

  for (const char of s2) {
    counts[char] = (counts[char] || 0) + 1;
  }

  let common = 0;

  for (const char of s1) {
    if (counts[char] > 0) {
      common++;
      counts[char]--;
    }
  }

  return common;
}

module.exports = {
  getCommonCharacterCount
};
