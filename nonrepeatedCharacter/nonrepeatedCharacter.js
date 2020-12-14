/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */
var firstNonRepeatedCharacter = function(string) {
  let tracker = {};
  if (string.length === 0) { return null; }

  for (let index = 0; index < string.length; index++) {
    if (tracker[string[index]] === undefined) {
      tracker[string[index]] = {count: 1, index: index, character: string[index]};
    } else {
      delete tracker[string[index]];
    }
  }
  let sortedUniques = Object.values(tracker).sort((a, b) => (
    a.index < b.index
  ))

  return sortedUniques[0] ? sortedUniques[0].character : null;
};