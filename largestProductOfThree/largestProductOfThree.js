/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  const sortedArr = array.sort((a, b) => (b - a));
  return sortedArr.reduce((acc, cur, index) => {
    if (index < 3) {
      return acc *= cur;
    }
    return acc;
  }, 1);
};
