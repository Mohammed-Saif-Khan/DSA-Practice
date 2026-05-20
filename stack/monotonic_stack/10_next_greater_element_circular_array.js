const arr = [1, 2, 1];

const nextGreaterElemCircularArray = (arr) => {
  let stack = [];

  let result = new Array(arr.length).fill(-1);

  for (let i = arr.length * 2 - 1; i >= 0; i--) {
    let index = i % arr.length;

    while (stack.length && stack[stack.length - 1] <= arr[index]) {
      stack.pop();
    }

    if (i < arr.length) {
      if (stack.length) {
        result[index] = stack[stack.length - 1];
      }
    }
    stack.push(arr[index]);
  }

  return result;
};

console.log(nextGreaterElemCircularArray(arr));
