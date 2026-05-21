// Before Solving this problem first read water_fall.md file to understand the problem statement and the approach to solve it.
const num = [1, 8, 6, 2, 5, 4, 8, 3, 7];

const waterFall = () => {
  let left = 0;
  let right = num.length - 1;

  let maxArea = 0;

  while (left < right) {
    let width = right - left;
    let height = Math.min(num[left], num[right]);
    let area = width * height;

    maxArea = Math.max(maxArea, area);

    if (num[left] < num[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

console.log(waterFall());
