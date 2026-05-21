// Find largest element of array
const num = [3, 7, 2, 9, 4];
let max = num[0];

for (let i = 0; i < num.length; i++) {
  if (num[i] > max) {
    max = num[i];
  }
}

console.log(max);
