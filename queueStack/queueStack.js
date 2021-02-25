/**
 * Write a stack using your preferred instantiation pattern.
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
class Stack {
  constructor() {
    this.storage = [];
    this.size = 0;
  }

  size() {
    return this.size;
  }

  push(value) {
    this.storage = this.storage.concat([value]);
    this.size++;
  }

  pop() {
    const newStorage = this.storage.splice(0, this.size - 1);
    const poped = this.storage;
    this.storage = newStorage;
    this.size--;
    return poped[0];
  }
}

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function() {
    // TODO: implement `enqueue`
  };

  // called to remove an item from the `queue`
  this.dequeue = function() {
    // TODO: implement `dequeue`
  };

  // should return the number of items in the queue
  this.size = function() {
    // TODO: implement `size`
  };
};
