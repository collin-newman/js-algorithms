/**
 * Given an array containing a deck of cards, implement a function that shuffles
 * the deck.
 *
 * Example:
 *  var deck = orderedDeck();
 *  // ["A♥","2♥","3♥",...,"J♦","Q♦","K♦"]
 *  shuffleDeck(deck);
 *  // ["2♠","J♣","A♦", ... ,"7♣","8♣","K♠"]
 *
 * Note:
 *   A shuffled deck should be completely random. That means that a given card should
 *   be as likely as any other to appear in a given deck index, completely independent
 *   of the order of the input deck. Think carefully about how to be sure your algorithm
 *   generates a properly shuffled deck-- it is easy to accidentally create a biased algorithm.
 *
 * Extra credit:
 *   - Even a naive algorithm can easily run in linear time. However, does your
 *     algorithm remain unbiased as N (the deck size) increases? How do you know?
 *   - Once you have created a properly random, linear algorithm, what is its space complexity?
 *     There is an algorithm that uses O(N) time and O(1) space (i.e., an in-place shuffle).
 *
 * A further note on randomness:
 *   Technically, a computer-shuffled deck will usually be "pseudorandom",
 *   not "truly" random. However, the difference between the two is too small to
 *   be detectable by any known test.
 *   See http://en.wikipedia.org/wiki/Pseudorandom_number_generator .
 *
 *   A human shuffler is much more biased; it takes around seven normal "riffle"
 *   shuffles before a real deck is actually randomized.
 *   See https://www.dartmouth.edu/~chance/teaching_aids/books_articles/Mann.pdf .
 */

// var shuffleDeck = function(deck) {
//   let result = [];

//   let remove = function(arr, randomIndex) {
//     if (arr.length === 0) {
//       return;
//     }
//     let removed = arr[randomIndex];
//     result.push(removed);
//     arr.splice(randomIndex, 1);
//     randomIndex = Math.floor(Math.random() * (arr.length - 1));
//     remove(arr, randomIndex);
//   }
//   remove(deck, Math.floor(Math.random() * (deck.length - 1)));
//   return result;
// };

// Ordered deck generator provided for your testing convenience
// (You may alter this function, but an unaltered copy will be used for tests.)
var orderedDeck = function() {
  var suits = [ '♥', '♣', '♠', '♦' ];
  var values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
  var deck = [];

  suits.forEach(function(suit) {
    values.forEach(function(value) {
      deck.push(value + suit);
    });
  });

  return deck;
};

var shuffleDeck = function(deck) {
  let shuffled = [];

  let indexes = {
    deckIndexes: [],
    shuffledIndexes: []
  };

  for (let i = 0; i < deck.length; i++) {
    indexes.deckIndexes.push(i);
    indexes.shuffledIndexes.push(i);
    shuffled.push({'FREE': i});
  }

  let recursor = function(arr) {
    if (arr.length === 0) {
      return;
    }
    console.log(JSON.stringify(indexes.deckIndexes));
    let randomDeckIndex = Math.floor(Math.random() * indexes.deckIndexes.length);
    let randomShuffledIndex = Math.floor(Math.random() * indexes.shuffledIndexes.length);
    shuffled[randomShuffledIndex] = deck[randomDeckIndex];
    indexes.deckIndexes.splice(randomDeckIndex, 1);
    indexes.shuffledIndexes.splice(randomShuffledIndex, 1);
    recursor(indexes.deckIndexes);
  }

  recursor(indexes.deckIndexes);

  return shuffled;
};