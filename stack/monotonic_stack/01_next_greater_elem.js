const nums = [2, 1, 2, 4, 3];

function findNextGreaterElem(arr) {
  const stack = [];
  const result = new Array(arr.length).fill(-1);

  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
      const popIndex = stack.pop();
      result[popIndex] = arr[i];
    }

    stack.push(i);
  }

  return result;
}

console.log(findNextGreaterElem(nums));
