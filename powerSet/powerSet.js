/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {
  let results = [str, ''];

  let findSet = function(string) {

    for (let i = 0; i < string.length; i++) {
      let head = string.slice(i, i + 1);
      let tailArr = string.split('');
      tailArr.splice(i, 1);

      let tail = tailArr.join('');
      let set = head;
      console.log('head', head);
      console.log('tail', tail);
      for (let j = 0; j < tail.length - 1; j++) {
        set += tail[j];
      }
      if (!results.includes(set)) {
        results.push(set);
      }
      if (head.length !== set.length) {
        findSet(set);
      }
    }
  }

  findSet(str);

  return results;
};

powerSet('jump');