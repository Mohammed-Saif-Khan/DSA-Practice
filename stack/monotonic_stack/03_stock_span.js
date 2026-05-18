const arr = [100, 80, 60, 70, 60, 75, 85];

const stockSpan = (arr) => {
  let stack = [];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] <= arr[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      result.push(i + 1);
    } else {
      result.push(i - stack[stack.length - 1]);
    }

    stack.push(i);
  }

  return result;
};

console.log(stockSpan(arr));
