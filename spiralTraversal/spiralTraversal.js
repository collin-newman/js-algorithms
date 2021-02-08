/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

spiralTraversal([
  [1,2,3],
  [4,5,6],
  [7,8,9]
]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */


var spiralTraversal = function(matrix) {
  const upperRow = (twoDimArray, acc) => {
    const result = twoDimArray.splice(0, 1);
    result[0].forEach((item) => acc.push(item));

    if (twoDimArray.length === 0) {
      finalResult = acc;
      return;
    }
    rightColumn(twoDimArray, acc);
  }

  const rightColumn = (twoDimArray, acc) => {
    if (twoDimArray.length === 1) {
      finalResult = acc;
      return;
    }
    const result = [];
    twoDimArray.forEach((item) => result.push(item.splice(item.length - 1, 1)));
    result.forEach((item) => acc.push(item[0]));
    lowerRow(twoDimArray, acc);
  }

  const lowerRow = (twoDimArray, acc) => {
    if (twoDimArray.length === 1) {
      finalResult = acc;
      return;
    }
    const result = twoDimArray.splice(twoDimArray.length - 1, 1);
    result[0].forEach((item) => acc.push(item));
    leftColumn(twoDimArray, acc);
  }

  const leftColumn = (twoDimArray, acc) => {
    if (twoDimArray[0].length === 1) {
      acc.push(twoDimArray[0][0]);
      finalResult = acc;
      return;
    }
    const result = [];
    twoDimArray.reverse().forEach((item) => result.push(item.splice(0, 1)));
    result[0].forEach((item) => acc.push(item));
    upperRow(twoDimArray, acc);
  }

  const finalResult = null;
  upperRow(matrix, []);
  return finalResult;
};
