const arr = [5, 10, -5];

const asteroidCollision = (arr) => {
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let destroyed = false;

    while (stack.length && stack[stack.length - 1] > 0 && current < 0) {
      let top = stack[stack.length - 1];

      // Top bigger
      if (top > Math.abs(current)) {
        destroyed = true;
        break;
      }

      // Equal size
      else if (top === Math.abs(current)) {
        stack.pop();
        destroyed = true;
        break;
      }
      // Current bigger
      else {
        stack.pop();
      }
    }

    // Current survives
    if (!destroyed) {
      stack.push(current);
    }
  }

  return stack;
};

console.log(asteroidCollision(arr));
