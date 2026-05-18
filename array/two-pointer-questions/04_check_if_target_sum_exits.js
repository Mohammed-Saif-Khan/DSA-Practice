const arr = [1, 2, 3, 4, 6];
let target = 6;

const checkTargetSum = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else {
      return true;
    }
  }

  return false;
};

console.log(checkTargetSum(arr, target));
