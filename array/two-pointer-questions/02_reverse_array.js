const num = [1, 2, 3, 4, 5];
let left = 0;
let right = num.length - 1;

while (left < right) {
  [num[left], num[right]] = [num[right], num[left]];
  left++;
  right--;
}

console.log(num);
