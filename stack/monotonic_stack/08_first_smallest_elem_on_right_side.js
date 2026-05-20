const arr = [4, 8, 5, 2, 25];

const firstSmallestElemOnRightSide = (arr) => {
  let stack = [];
  let result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
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

console.log(firstSmallestElemOnRightSide(arr));
