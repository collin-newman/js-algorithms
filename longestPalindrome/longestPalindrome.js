/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
  const palandromes = [];
  for (let i = 1; i < string.length; i++) {
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
  palandromes.sort((a, b) => b.length - a.length);
  return palandromes[0].join('');
};