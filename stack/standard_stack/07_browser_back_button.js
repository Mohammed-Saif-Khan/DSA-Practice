class Stack {
  constructor() {
    this.stack = [];
  }

  visit(page) {
    return this.stack.push(page);
  }

  back() {
    return this.stack.pop();
  }

  currentPage() {
    if (this.stack.length === 0) {
      return null;
    } else {
      return this.stack[this.stack.length - 1];
    }
  }
}

const s = new Stack();
s.visit("google");
s.visit("youTube");
s.visit("gitHub");
console.log("After Visiting", s.stack);
s.back();
console.log("After Back", s.stack);
console.log("Current Page", s.currentPage());
