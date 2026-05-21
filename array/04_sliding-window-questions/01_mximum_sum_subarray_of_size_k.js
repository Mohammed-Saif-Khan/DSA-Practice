// Problem - Given an array of positive integers arr and a positive integer k, find the maximum sum of any contiguous subarray of size k. A contiguous subarray is a sequence of consecutive elements inside the array.

const arr = [2, 1, 5, 1, 3, 2];
const k = 3;

const maxSumSubarray = (arr, k) => {
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
};

console.log(maxSumSubarray(arr, k));
