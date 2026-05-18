const num = [4, 5, 2, 10, 8];

const previousSmallestElem = (arr) => {
  let stack = [];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      result[i] = -1;
    } else {
      result[i] = arr[stack[stack.length - 1]];
    }

    stack.push(i);
  }

  return result;
};

console.log(previousSmallestElem(num));
