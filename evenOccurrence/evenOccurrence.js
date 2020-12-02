/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  let counterObj = {};
  arr.forEach(function(item, index) {
    if (counterObj[item] === undefined) {
      counterObj[item] = {
        occurrence: 1,
        arrayPos: index
      }
    } else {
      counterObj[item].occurrence++;
    }
  })

  let evens = {};

  for (let key in counterObj) {
    if (counterObj[key].occurrence % 2 === 0) {
      evens[key] = counterObj[key];
    }
  }


  let values = Object.values(evens);

  let result = values.sort(function(a, b) {return a.arrayPos - b.arrayPos});

  return arr[result[0].arrayPos];
};