// **Question:**

// Aapko `"1"` aur `"0"` se bani hui ek 2D binary matrix di gayi hai:

// ```javascript
// const matrix = [
//   ["1", "0", "1", "0", "0"],
//   ["1", "0", "1", "1", "1"],
//   ["1", "1", "1", "1", "1"],
//   ["1", "0", "0", "1", "0"],
// ];

// ```

// Aapko is matrix ke andar sirf `"1"`s se banne wale **sabse bade rectangle ka area (Maximal Rectangle Area)** nikalna hai.

// 1. Is problem ko solve karne ke liye hum row-by-row iterate karke matrix ko **Largest Rectangle in Histogram** problem mein kaise convert karte hain? Agar kisi row mein beech mein `"0"` aa jaye, toh us column ki height array value par kya asar padta hai aur kyun?
// 2. Diye gaye binary matrix ke liye maximum rectangle area ka final numerical answer kya hoga?

const matrix = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
];

// Histogram Logic
const largestHistogram = (heights) => {
  let stack = [];
  let maxArea = 0;

  for (let i = 0; i <= heights.length; i++) {
    let currentHeight = i === heights.length ? 0 : heights[i];

    while (stack.length && currentHeight < heights[stack[stack.length - 1]]) {
      let topIndex = stack.pop();
      let height = heights[topIndex];
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

// Main Matrix Function
const maximalRectangle = (matrix) => {
  if (matrix.length === 0) {
    return 0;
  }

  let cols = matrix[0].length;

  // Heights array
  let heights = new Array(cols).fill(0);
  let maxArea = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col] === "1") {
        heights[col] += 1;
      } else {
        heights[col] = 0;
      }
    }

    let area = largestHistogram(heights);
    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
};

console.log(maximalRectangle(matrix));
