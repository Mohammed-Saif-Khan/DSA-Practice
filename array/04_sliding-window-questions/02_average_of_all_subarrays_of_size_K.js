// Problem - In this problem, find the average of k size of subarray and return the array of averages
const arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
const k = 5;

const averageOfSubarrays = (arr, k) => {
  let windowSum = 0;
  let result = [];
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  result.push(windowSum / k);

  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    result.push(windowSum / k);
  }

  return result;
};

console.log(averageOfSubarrays(arr, k));
