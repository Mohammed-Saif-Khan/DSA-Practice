// Before Staring monotonic stack, let's read monotonic.md file to understand the concept.

// Problem: Given an array, find the next greater element for each element in the array. The next greater element for an element x is the first greater element on the right side of x in the array. If there is no greater element, then the next greater element for x is -1.

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
