// Find the Sum of an Array
const findSumOfArray = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
};

console.log(findSumOfArray([1, 2, 3, 4]));
