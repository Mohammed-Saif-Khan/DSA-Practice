const num = [-4, -1, 0, 3, 10];

const squareOfSortedArray = (num) => {
  let left = 0;
  let right = num.length - 1;
  let result = new Array(num.length);
  let position = num.length - 1;

  while (left <= right) {
    let leftValue = Math.abs(num[left]);
    let rightValue = Math.abs(num[right]);

    if (leftValue > rightValue) {
      result[position] = leftValue * leftValue;
      left++;
    } else {
      result[position] = rightValue * rightValue;
      right--;
    }

    position--;
  }

  return result;
};

console.log(squareOfSortedArray(num)); // Output: [0,1,9,16,100]
