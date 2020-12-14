/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */
var firstNonRepeatedCharacter = function(string) {
  let tracker = {};

  for (let index = 0; index < string.length; index++) {
    if (tracker[string[index]] === undefined) {
      tracker[string[index]] = {count: 1, index: index, character: string[index]};
    } else {
      tracker[string[index]].count++;
    }
  }
  let uniques = Object.values(tracker).filter((char) => (
    char.count === 1
  ));
  let sortedUniques = uniques.sort((a, b) => (
    a.index < b.index
  ))
  return sortedUniques[0].character;
};