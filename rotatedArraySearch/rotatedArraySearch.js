/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function (rotated, target) {
  // Your code here:
  let result = null;

  const findPivot = (array, low, high) => {
    if (high < low) {
      return -1;
    }
    if (high === low) {
      return low;
    }

    const mid = Math.floor((low + high) / 2);

    if (mid < high && array[mid] > array[mid + 1]) {
      return mid;
    }
    if (mid > low && array[mid] < array[mid - 1]) {
      return mid - 1;
    }
    if (array[low] >= array[mid]) {
      return findPivot(array, low, mid - 1);
    }
    return findPivot(array, mid + 1, high);
  };

  const binarySearch = () => {

  }

  return null;
};

