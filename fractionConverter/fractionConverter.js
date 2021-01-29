/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  // Your code here
  const parsedNum = Number(parseFloat(number % Math.floor(number)).toFixed(1));

  if (parsedNum === 0) {
    return `${Math.floor(number)}/1`;
  }

  if (parsedNum === 0.1) {
    const num = Math.floor(number) * 10;
    return `${num + 1}/10`;
  }

  if (parsedNum === 0.2) {
    const num = Math.floor(number) * 5;
    return `${num + 1}/5`;
  }

  if (parsedNum === 0.5) {
    return `${Math.floor(number)}/2`;
  }

  if (parsedNum === 0.6) {
    const num = Math.floor(number) * 5;
    return `${num + 3}/5`;
  }

};
