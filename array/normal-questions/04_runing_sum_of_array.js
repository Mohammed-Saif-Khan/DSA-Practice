const num = [1, 2, 3, 4];
const result = [];
let sum = 0;

for (let i = 0; i < num.length; i++) {
  sum += num[i];
  result.push(sum);
}

console.log(result);
