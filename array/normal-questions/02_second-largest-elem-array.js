// Find second largest Element of array
const num = [3, 7, 2, 9, 4];

let max = num[0];
let secondMax = -Infinity;

for (let i = 1; i < num.length; i++) {
  if (num[i] > max) {
    secondMax = max;
    max = num[i];
  } else if (num[i] < max && num[i] > secondMax) {
    secondMax = num[i];
  }
}

console.log("Second Largest:", secondMax);
console.log("Largest:", max);
