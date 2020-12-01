/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function () {
  let results = [];
  obj = { 0: 'R', 1: 'P', 2: 'S' };
  array = [0, 0, 0];
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      while (array[2] < 3) {
        results.push([obj[array[0]], obj[array[1]], obj[array[2]]]);
        array[2]++;
      }
      array[2] = 0;
      array[1]++;
    }
    array[0] = 0;
    array[1] = 0;
    array[2] = 0;
    let oldObj0 = obj[0];
    obj[0] = obj[1];
    obj[1] = obj[2];
    obj[2] = oldObj0;
  }
  return results;
};