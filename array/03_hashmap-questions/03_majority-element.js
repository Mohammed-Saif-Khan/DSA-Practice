// Problem  - Majority Element in an Array
const arr = [3, 3, 4, 2, 3, 3, 3];

const majorityElement = (arr) => {
  let obj = {};
  let majority = null;

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] > arr.length / 2) {
      majority = arr[i];
      break;
    }
  }

  return majority;
};

console.log(majorityElement(arr)); // Output: 3
