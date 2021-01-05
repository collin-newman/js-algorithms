/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
  let index = null;
  let start = 0;
  let end = array.length - 1;
  let mid = Math.floor(arr.length / 2);
  if (array[mid] === target) { return mid; };

  let recursor = (arr) => {
    mid = Math.floor(arr.length / 2);
    if (target === arr[mid]) {
      if (mid = 0) {
        index = start;
      } else if (mid = array.length - 1) {
        index = end;
      } else {
        index = end - start;
      }
    } else if (target > arr[mid]) {
      start = mid + 1;
      recursor(arr.slice(mid + 1));
    } else if (target < arr[mid]) {
      end = mid - 1;
      recursor(arr.slice(0, mid));
    }
  }
  recursor(array, target);
  return index;
};

