const nums = [73, 74, 75, 71, 69, 72, 76, 73];

function monotonicStackTemplate(arr) {
  let stack = [];
  let result = new Array(arr.length).fill(0);

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
      const popIndex = stack.pop();
      result[popIndex] = i - popIndex;
    }

    stack.push(i);
  }

  return result;
}

console.log(monotonicStackTemplate(nums));
