const arr = [10, 4, 2, 20, 40, 12, 30];

const previousGreaterElem = (arr) => {
  let stack = [];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];

    while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
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

console.log(previousGreaterElem(arr));
