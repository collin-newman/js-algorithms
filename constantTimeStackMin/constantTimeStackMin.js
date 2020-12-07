/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */

 class Stack {
  constructor() {
    this.storage = {};
    this.stackSize = 0;
    this.stackMin = undefined;
  }

  // add an item to the top of the stack
  push(value) {
    if (this.storage[0] === undefined) {
      this.storage[0] = value;
      this.stackMin = value;
      this.stackSize++;
    } else {
      this.storage[this.stackSize] = value;
      if (this.storage[this.stackSize] < this.stackMin) {
        this.stackMin = this.storage[this.stackSize];
      }
      this.stackSize++
    }
  }
  // remove an item from the top of the stack
  pop() {
    let removed = this.storage[this.stackSize - 1];
    delete this.storage[this.stackSize - 1];
    this.stackSize--;
    if (removed === this.stackMin) {
      this.stackMin = Infinity;
      for (let key in this.storage) {
        if (this.storage[key] < this.stackMin) {
          this.stackMin = this.storage[key];
        }
      }
    }

    return removed;
  }

  // return the number of items in the stack
  size() {
    return this.stackSize;
  }

  // return the minimum value in the stack
  min() {
    return this.stackMin;
  }
}