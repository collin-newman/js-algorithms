/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
  if (string === '' || typeof string !== 'string') {
    return null;
  }

  const streaks = {};
  const characters = string.split('');
  let onStreak = false;

  characters.forEach((char, index) => {
    if (characters[index] === characters[index + 1]) {
      if (streaks[char] === undefined) {
        streaks[char] = { count: 2, startIndex: index };
        onStreak = true;
      } else {
        streaks[char].count++;
      }
    } else {
      if (onStreak) {
        streaks[char].endIndex = index;
        onStreak = false;
      }
    }
  });

  // no streaks found in string
  if (Object.keys(streaks).length === 0) {
    return [0, 0];
  }

  const streaksArr = [];
  for (let key in streaks) {
    streaksArr.push({ char: key, stats: streaks[key]});
  }
  const sorted = streaksArr.sort((a, b) => b.stats.count - a.stats.count);
  const filtered = sorted.filter((streak) => streak.stats.count === sorted[0].stats.count);
  const sortedByIndex = filtered.sort((a, b) => a.stats.startIndex - b.stats.startIndex);

  return [sortedByIndex[0].stats.startIndex, sortedByIndex[0].stats.endIndex];
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};
