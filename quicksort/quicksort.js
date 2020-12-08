/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */


var quicksort = function(array) {

  if (array.length === 1) {
    return array[0];
  } else if (array.length === 0) {
    return;
  }
  let pivot = [];
  let pivotVal = array[Math.floor(array.length / 2)];
  let leftPartition = [];
  let rightPartition = [];

  array.forEach(item => {
    if (item < pivotVal) {
      leftPartition.push(item);
    } else if (item > pivotVal) {
      rightPartition.push(item);
    } else if (item === pivotVal) {
      pivot.push(item);
    }
  })

  if (leftPartition.length === 0) {
      return [].concat(pivot, quicksort(rightPartition));
  } else if (rightPartition.length === 0) {
      return [].concat(quicksort(leftPartition), pivot);
  }

  return [].concat(quicksort(leftPartition), pivot, quicksort(rightPartition));
};