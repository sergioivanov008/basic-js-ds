const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.value = null;
  }

  getUnderlyingList() {
    return this.value;
  }

  enqueue(value) {
    const newEl = new ListNode(value);

    if (!this.value) {
      this.value = newEl;
    } else {
      let lastEl = this.value;

      while (lastEl.next) {
        lastEl = lastEl.next;
      }

      lastEl.next = newEl;
    }
  }

  dequeue() {
    if (!this.value) {
      return null;
    }

    const firstEl = this.value.value;
    if (this.value.next) {
      this.value = this.value.next;
    } else {
      this.value = null;
    }

    return firstEl;
  }
}

module.exports = {
  Queue
};
