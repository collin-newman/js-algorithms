/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
  if (string.length === 0) {
    return '';
  }
  const palandromes = [];
  for (let i = 1; i < string.length; i++) {
    // even length palandromes
    if (string[i] !== undefined && string[i - 1] !== undefined) {
      if (string[i] === string[i - 1]) {
        let palandrome = [string[i], string[i - 1]];
        for (let j = 1; j < string.length; j++) {
          if (string[i - j] !== undefined && string[i + j] !== undefined) {
            if (string[i - j - 1] === string[i + j]) {
              palandrome.unshift(string[i - j - 1]);
              palandrome.push(string[i + j]);
            }
          }
        }
        palandromes.push(palandrome);
      } else {
        let palandrome = [string[i]];
        for (let j = 1; j < string.length; j++) {
          if (string[i - j] !== undefined && string[i + j] !== undefined) {
            if (string[i - j] === string[i + j]) {
              palandrome.unshift(string[i - j]);
              palandrome.push(string[i + j]);
            }
          }
        }
        palandromes.push(palandrome);
      }
    }
  }
  palandromes.sort((a, b) => b.length - a.length);
  return palandromes;
};