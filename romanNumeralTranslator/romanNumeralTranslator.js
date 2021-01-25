
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: { val: 1, index: 0 },
  V: { val: 5, index: 1 },
  X: { val: 10, index: 2 },
  L: { val: 50, index: 3 },
  C: { val: 100, index: 4 },
  D: { val: 500, index: 5 },
  M: { val: 1000, index: 6 },
};

var translateRomanNumeral = function(romanNumeral) {
// TODO: Implement me!
  if (typeof romanNumeral !== 'string') {
    return null;
  }
  if (romanNumeral.length === 1) {
    return DIGIT_VALUES[romanNumeral].val;
  }
  if (romanNumeral.length === 2) {
    if (DIGIT_VALUES[romanNumeral[0]].index >= DIGIT_VALUES[romanNumeral[1]].index) {
      return DIGIT_VALUES[romanNumeral[0]].val + DIGIT_VALUES[romanNumeral[1]].val;
    }
    return DIGIT_VALUES[romanNumeral[1]].val - DIGIT_VALUES[romanNumeral[0]].val;
  }
  let previousIndex = 0;
  return romanNumeral.split('').reduce((acc, cur) => {
    if (DIGIT_VALUES[cur].index >= previousIndex) {
      previousIndex = DIGIT_VALUES[cur].index;
      return  acc += DIGIT_VALUES[cur].val;
    }
    previousIndex = DIGIT_VALUES[cur].index;
    return  acc -= DIGIT_VALUES[cur].val;
  }, 0);
};