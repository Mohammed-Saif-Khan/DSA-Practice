// Move all Zeros to the End of the Array
const num = [0, 1, 0, 3, 12];
let index = 0;

for (let i = 0; i < num.length; i++) {
  if (num[i] !== 0) {
    num[index] = num[i];
    index++;
  }
}

for (let i = index; i < num.length; i++) {
  num[i] = 0;
}

console.log(num);
