// **Question:**

// Aapko ek stock ke lagatar kuch dino ki daily price list di gayi hai: `[100, 80, 60, 70, 60, 75, 85]`.

// Aapko har ek din ke liye us stock ka **"Span"** nikalna hai. **Stock Span** ka matlab hota hai ki aaj ke din ko mila kar, piche lagatar (consecutive) kitne dino tak stock ki price aaj ki price se kam ya uske barabar ($\le$) thi.

// *Yani, agar aaj price 70 hai, toh piche lagatar kitne dino se price 70 ya usse kam chal rahi hai.*

// 1. Is Stock Span problem ko bina brute-force use kiye, efficient tarike se **$O(n)$ time complexity** mein solve karne ke liye aap kis data structure ka use karenge?
// 2. Diye gaye price array ke liye final output span array kya hoga?

const arr = [100, 80, 60, 70, 60, 75, 85];

const stockSpan = (arr) => {
  let stack = [];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] <= arr[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      result.push(i + 1);
    } else {
      result.push(i - stack[stack.length - 1]);
    }

    stack.push(i);
  }

  return result;
};

console.log(stockSpan(arr)); // Output: [1, 1, 1, 2, 1, 4, 6]
