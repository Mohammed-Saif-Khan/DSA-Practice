class MinStack {
  constructor() {
    this.main = [];
    this.min = [];
  }

  push(value) {
    this.main.push(value);

    if (this.min.length === 0 || value <= this.min[this.min.length - 1]) {
      this.min.push(value);
    }
  }

  pop() {
    let removed = this.main.pop();

    if (removed === this.min[this.min.length - 1]) {
      this.min.pop();
    }

    return removed;
  }

  top() {
    return this.main[this.main.length - 1];
  }

  getMin() {
    return this.min[this.min.length - 1];
  }
}

const s = new MinStack();

s.push(5);

s.push(10);

s.push(2);

s.push(8);

console.log(s.getMin());

console.log(s.top());

console.log(s.main);

console.log(s.min);

s.pop();

s.pop();

console.log(s.getMin());
