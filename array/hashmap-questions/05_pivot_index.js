// pivot formula = left === total - left - num[i]

const num = [1, 7, 3, 6, 5, 6];
let total = 0;
let left = 0;

for (let i = 0; i < num.length; i++) {
  total += num[i];
}

for (let i = 0; i < num.length; i++) {
  if (left === total - left - num[i]) {
    console.log(i);
    break;
  }
  left += num[i];
}
