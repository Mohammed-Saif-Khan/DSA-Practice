// **Question:**

// Aapko ek integer array diya gaya hai: `[4, 8, 5, 2, 25]`.

// Aapko ek efficient algorithm likhna hai jo har ek element ke liye uske **right side par aane wala sabse pehla chota element (Immediate/Next Smaller Element on Right)** dhund sake. Agar kisi element ke right side par usse chota koi number nahi milta, toh uski jagah `-1` output hona chahiye.

// 1. Is problem ko right-to-left scan karke **$O(n)$ time complexity** mein solve karne ke liye aap kis type ke Monotonic Stack ka use karenge?
// 2. Diye gaye array `[4, 8, 5, 2, 25]` ke liye final output array kya nikal kar aayega?

const arr = [4, 8, 5, 2, 25];

const firstSmallestElemOnRightSide = (arr) => {
  let stack = [];
  let result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
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

console.log(firstSmallestElemOnRightSide(arr));
