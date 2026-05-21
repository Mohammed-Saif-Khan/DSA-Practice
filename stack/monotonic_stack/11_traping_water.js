const arr = [4, 2, 0, 3, 2, 5];

const trapWater = (arr) => {
  let stack = [];
  let totalWater = 0;

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
      let middle = stack.pop();

      if (stack.length === 0) {
        break;
      }

      let leftWall = stack[stack.length - 1];
      let width = i - leftWall - 1;
      let height = Math.min(arr[leftWall], arr[i]) - arr[middle];

      totalWater += width * height;
    }

    stack.push(i);
  }

  return totalWater;
};

console.log(trapWater(arr));
