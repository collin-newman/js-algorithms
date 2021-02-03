// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

function editDistance(str1, str2) {
  // Your code here.
  const findChuncks = (string1, string2) => {
    const chuncks = [];
    let chunck = '';

    for (let i = 0; i < string1.length; i++) {
      const chunckStart = string2.indexOf(string1[i]);
      if (chunckStart !== -1 && string2.indexOf(string1[i + 1]) === chunckStart + 1) {
        chunck += string1[i];
        chunck += string1[i + 1];

        const remainingString = string1.slice(i + 2);
        console.log(chunck, remainingString);
        for (let j = 0; j < remainingString.length; j++) {
          if (string2[chunckStart + 2 + j] === remainingString[j]) {
            chunck += remainingString[j];
          } else {
            // we found a 2 character chunck so increase i as to not
            // check the same character twice
            i = chunckStart + 2;
            chuncks.push(chunck);
            chunck = '';
            break;
          }
        }
      }
    }
    return chuncks;
  };

  return findChuncks(str1, str2);
}

console.log(editDistance('abcxyz', 'ghxyzo'));