/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';


var LinkedList = function() {
  this.storage = [];
  this.head = {};
  this.tail = {};
};

//write methods here!

LinkedList.prototype.addToTail = function(value) {
  this.storage.push(LinkedList.prototype.makeNode(value));
  let previousElement = this.storage.length - 2 > 0 ? this.storage.length - 2 : 0;
  let thisElement = this.storage.length - 1 > 1 ? this.storage[this.storage.length - 1] : null;
  this.storage[previousElement][1] = thisElement;
  this.head.value = this.storage[0][0];
  this.tail.value = this.storage[this.storage.length - 1][0];
};

LinkedList.prototype.removeHead = function() {
  let head = this.storage.shift();
  this.head.value = this.storage.length > 0 ? this.storage[0][0] : null;
  let value = head !== undefined ? head[0] : null;
  return value;
};

LinkedList.prototype.contains = function(node) {
  let contains = false;
  for (let i = 0; i < this.storage.length; i++) {
    if (this.storage[i] === node) {
      contains = true;
      break;
    }
  }
  return contains;
};

LinkedList.prototype.makeNode = function(value) {
  return [value, null];
}