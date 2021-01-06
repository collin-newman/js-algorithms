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

  let recursor = (arr, start, end) => {
    let mid = Math.floor(arr.length / 2);
    if (target === arr[mid]) {
      return array[((start + end) / 2)];
    } else if (target > arr[mid]) {
      recursor(arr.slice(mid + 1), mid + 1, end);
    } else if (target < arr[mid]) {
      recursor(arr.slice(0, mid - 1), start, mid - 1);
    }
  }
  return recursor(array, 0, array.length - 1);
};

