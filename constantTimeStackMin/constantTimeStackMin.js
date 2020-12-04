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

class Stack() {
  constructor() {
    this.storage = {};
    this.size = 0;
    this.min = undefined;
  }

  // add an item to the top of the stack
  push(value) {
    if (this.storage[0] === undefined) {
      this.storage[0] = value;
      this.storage['min'] = value;
      this.size++;
    } else {
      this.storage[this.size] = value;
      if (this.storage[this.size] < this.min) {
        this.min = this.storage[this.size];
      }
      this.size++
    }
  }
  // remove an item from the top of the stack
  pop() {
    let removed = this.storage[this.size - 1];
    this.storage[this.size - 1] = undefined;
    this.size--;
    return removed;
  }

  // return the number of items in the stack
  size() {
    return this.size;
  }

  // return the minimum value in the stack
  min() {
    return this.min;
  }
}


