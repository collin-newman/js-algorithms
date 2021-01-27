/*
*
* Integer Reverse
*
* Given a positive integer, return its digits reversed.
*
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY.
* - Only use integers and math in your solution.
*
*/

function reverseInteger(number){
  // TODO: Implement this function!
  let lastDigit;
  let reverse = 0;

  while (number > 0) {
    lastDigit = number % 10;
    reverse = (reverse * 10) + lastDigit;
    number = number - lastDigit;
    number = number / 10;
  }
  return reverse;
}
