/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */
var firstNonRepeatedCharacter = function(string) {
  let tracker = {
      alreadyChecked: []
  };
  if (string.length === 0) { return null; }

  for (let index = 0; index < string.length; index++) {
    if (tracker[string[index]] === undefined && !tracker.alreadyChecked.includes(string[index])) {
      tracker[string[index]] = {count: 1, index: index, character: string[index]};
    } else {
      if (!tracker.alreadyChecked.includes(string[index])) {
        tracker.alreadyChecked.push(string[index]);
      }
      delete tracker[string[index]];
    }
  }
  delete tracker.alreadyChecked;

  let sortedUniques = Object.values(tracker).sort((a, b) => (
    a.index < b.index
  ))

  return sortedUniques[0] ? sortedUniques[0].character : null;
};