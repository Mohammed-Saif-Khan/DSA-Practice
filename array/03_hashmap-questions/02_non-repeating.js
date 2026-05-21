// Day 5 Question: First Non-Repeating Element in an Array
const arr = [1, 2, 2, 3, 3, 4];
let obj = {};

for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = (obj[arr[i]] || 0) + 1;
}

let value = null;
for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]] === 1) {
    value = arr[i];
    break;
  }
}

console.log(value);
