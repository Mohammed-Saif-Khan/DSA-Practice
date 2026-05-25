// **Question:**

// Aapko ek histogram diya gaya hai jahan har ek bar ki width `1` hai. Is histogram ke bars ki heights ek array ke roop mein di gayi hain: `[2, 1, 5, 6, 2, 3]`.

// Aapko is histogram ke andar banne wale **sabse bade rectangle ka area (Largest Rectangle Area)** nikalna hai. Jo rectangle aap banayenge, uski height kisi na kisi bar se limited hogi aur uski width consecutive bars ko jod kar banegi.

// 1. Is problem ko **$O(n)$ time complexity** mein solve karne ke liye "Monotonic Stack" approach ka use kaise kiya jata hai? Jab hume choti height ka bar milta hai, toh stack se elements pop karte waqt **width** kaise calculate ki jaati hai?
// 2. Diye gaye heights array ke liye maximum rectangle area ka final numerical answer kya hoga?

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

console.log(largestReactangleHistogram(arr)); //Output: 10 (5*2);
