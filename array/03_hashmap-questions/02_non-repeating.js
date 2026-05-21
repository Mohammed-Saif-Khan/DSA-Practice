// Question: First Non-Repeating Element in an Array
const arr = [1, 2, 2, 3, 3, 4];

const firstNonRepeating = (arr) => {
  let obj = {};
  let value = null;

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === 1) {
      value = arr[i];
      break;
    }
  }
  return value;
};

console.log(firstNonRepeating(arr)); // Output: 1
