// Dry run this code and understand it when you see after long time
class CircularQueue {
  constructor(size) {
    this.queue = new Array(size);
    this.size = size;
    this.front = -1;
    this.rear = -1;
  }

  isEmpty() {
    return this.front === -1;
  }

  isFull() {
    return (this.rear + 1) % this.size === this.front;
  }

  enqueue(value) {
    if (this.isFull()) {
      console.log("Queue is Full");
      return;
    }

    // First element
    if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
    } else {
      // Circular movement
      this.rear = (this.rear + 1) % this.size;
    }

    this.queue[this.rear] = value;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
      return;
    }

    let removedValue = this.queue[this.front];

    // Only one element left
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      // Circular movement
      this.front = (this.front + 1) % this.size;
    }

    return removedValue;
  }

  getFront() {
    if (this.isEmpty()) {
      return null;
    }

    return this.queue[this.front];
  }

  getRear() {
    if (this.isEmpty()) {
      return null;
    }

    return this.queue[this.rear];
  }

  printQueue() {
    console.log(this.queue);
  }
}

const q = new CircularQueue(3);

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.printQueue();
q.dequeue();
q.printQueue();
q.enqueue(40);
q.printQueue();
console.log("Front:", q.getFront());
console.log("Rear:", q.getRear());
