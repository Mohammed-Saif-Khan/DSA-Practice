// **Question:**

// Aapko ek shehar ka lagatar kuch dino ka daily temperature data diya gaya hai: `[73, 74, 75, 71, 69, 72, 76, 73]`.

// Aapko ek efficient algorithm likhna hai jo har ek din ke liye yeh calculate kare ki **us din ke baad kitne dino ka intezar (wait) karna padega taaki usse zyada garam (strictly warmer) temperature mile**. Agar kisi din ke baad future mein usse bada temperature nahi aata, toh uski jagah `0` output hona chahiye.

// 1. Is problem ko linear time complexity yaani **$O(n)$** mein solve karne ke liye aap kaun sa data structure use karenge aur kyun?
// 2. Diye gaye temperature array ke liye final output array kya hoga?

const nums = [73, 74, 75, 71, 69, 72, 76, 73];

function monotonicStackTemplate(arr) {
  let stack = [];
  let result = new Array(arr.length).fill(0);

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
      const popIndex = stack.pop();
      result[popIndex] = i - popIndex;
    }

    stack.push(i);
  }

  return result;
}

console.log(monotonicStackTemplate(nums)); // Output: [1, 1, 4, 2, 1, 1, 0, 0]
