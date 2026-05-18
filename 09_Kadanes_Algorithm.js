const num = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let currentSum = 0;
let maxSum = num[0];

for (let i = 0; i < num.length; i++) {
  currentSum += num[i];

  if (currentSum > maxSum) {
    maxSum = currentSum;
  }

  if (currentSum < 0) {
    currentSum = 0;
  }
}

console.log(maxSum);
