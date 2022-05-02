const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

// const { ListNode } = require('../extensions/list-node.js');

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

  getUnderlyingList() {
    //throw new NotImplementedError('Not implemented');
  }

  enqueue(value) {
    //throw new NotImplementedError('Not implemented');
    const newNode = new ListNode(value);

    if(!this.head || !this.tail){
      this.head = newNode;
      this.tail = newNode;

    }
    
    this.tail.next = newNode;
    this.tail = newNode;
  }

  dequeue() {
    //throw new NotImplementedError('Not implemented');
    if(!this.head){
      return null;
    }
    let result = this.head.value;
    this.head = this.head.next;
    console.log(result);
    return result;
  }

  getUnderlyingList() {
    return this.head;
  }
}

module.exports = {
  Queue
};
