// **Question:**

// Aapko ek integer array diya gaya hai: `[10, 4, 2, 20, 40, 12, 30]`.

// Aapko ek efficient algorithm likhna hai jo har ek element ke liye uske **left side (piche) par aane wala sabse pehla bada element (Previous Greater Element)** dhund sake. Agar kisi element ke left side par usse bada koi number nahi milta, toh uski jagah `-1` output hona chahiye.

// 1. Is problem ko left-to-right scan karke **$O(n)$ time complexity** mein solve karne ke liye aap kis type ke Monotonic Stack (Increasing ya Decreasing) ka use karenge?
// 2. Diye gaye array `[10, 4, 2, 20, 40, 12, 30]` ke liye final output array kya nikal kar aayega?

const arr = [10, 4, 2, 20, 40, 12, 30];

const previousGreaterElem = (arr) => {
  let stack = [];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];

    while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      result[i] = -1;
    } else {
      result[i] = arr[stack[stack.length - 1]];
    }

    stack.push(i);
  }

  return result;
};

console.log(previousGreaterElem(arr)); //Output: [ -1, 10, 4, 10, 20, 40, 40 ]
