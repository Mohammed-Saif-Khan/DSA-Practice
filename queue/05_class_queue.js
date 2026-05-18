class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    this.queue.shift();
  }

  front() {
    return this.queue[0];
  }

  rear() {
    return this.queue[this.queue.length - 1];
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

const q = new Queue();
q.enqueue(10);

q.enqueue(20);

q.enqueue(30);

console.log("Front:", q.front());

console.log("Rear:", q.rear());

q.dequeue();

console.log("Front after dequeue:", q.front());

console.log("Is Empty:", q.isEmpty());

console.log("Queue:", q.queue);
