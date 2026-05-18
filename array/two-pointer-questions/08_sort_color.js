const num = [2, 0, 2, 1, 1, 0];

const sortColors = (num) => {
  let left = 0;
  let i = 0;
  let right = num.length - 1;

  while (i <= right) {
    if (num[i] === 0) {
      [num[i], num[left]] = [num[left], num[i]];
      left++;
      i++;
    } else if (num[i] === 2) {
      [num[i], num[right]] = [num[right], num[i]];
      right--;
    } else {
      i++;
    }
  }
  return num;
};

console.log(sortColors(num)); // Output: [0,0,1,1,2,2]
