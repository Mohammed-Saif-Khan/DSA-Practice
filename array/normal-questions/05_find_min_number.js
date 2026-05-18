const findSmallestNumber = (arr) => {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
};

console.log(findSmallestNumber([8, 3, 11, 1, 6]));
