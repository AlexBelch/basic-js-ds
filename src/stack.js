const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.currentStack = [];
  }

  push(element) {
    this.currentStack.push(element);
  }

  pop() {
    return this.currentStack.length === 0 ? null : this.currentStack.pop();
  }

  peek() {
    return this.currentStack[this.currentStack.length - 1];
  }
}

module.exports = {
  Stack,
};
