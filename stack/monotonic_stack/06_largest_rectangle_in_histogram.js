const arr = [2, 1, 5, 6, 2, 3];

const largestReactangleHistogram = (arr) => {
  let stack = [];
  let maxArea = 0;

  for (let i = 0; i <= arr.length; i++) {
    let currentHeight = i === arr.length ? 0 : arr[i];

    while (stack.length && arr[stack[stack.length - 1]] > currentHeight) {
      let topIndex = stack.pop();
      let height = arr[topIndex];
      let width;

      if (stack.length === 0) {
        width = i;
      } else {
        width = i - stack[stack.length - 1] - 1;
      }

      let area = height * width;
      maxArea = Math.max(maxArea, area);
    }

    stack.push(i);
  }

  return maxArea;
};

console.log(largestReactangleHistogram(arr));
