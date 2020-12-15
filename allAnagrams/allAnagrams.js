/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

 var allAnagrams = function(inputString) {
  // Your code here.
  let anagrams = [];
  let shift = function(string) {
    let characters = string.split('');
    if (characters.length <= 1) {
      return string;
    }
    let head = characters.shift();
    characters.push(head);
    return characters.join('');
  }

  let recursor = function(head, tail) {
    console.log('Head', head, 'Tail', tail)
    if (tail === undefined || tail.length === 1) { return; }

    for (let i = 0; i < tail.length; i++) {
      tail = shift(tail);
      anagrams.push(head + tail);
      recursor(head + tail[0], tail.slice(1, tail.length));
    }
    recursor(head + tail[0], tail.slice[1, tail.length]);
  }

  recursor(inputString[0], inputString.slice(1, inputString.length));

  return anagrams;
};
