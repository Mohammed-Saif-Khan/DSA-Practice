// **Question:**

// Aapko ek bada positive integer ek string ke roop mein diya gaya hai: `"1432219"`, aur ek integer `k = 3` diya gaya hai.

// Aapko is string mein se **exact $k$ digits ko remove karna hai** taaki bacha hua number **sabse chota (Minimum possible value)** bane. Bachaye gaye digits ka original order change nahi hona chahiye.

// 1. Is problem ko greedy approach ke sath optimal tarike se solve karne ke liye aap kaun sa data structure use karenge, aur jab naya digit pichle digit se chota hota hai toh hum digits ko pop kyun karte hain?
// 2. Diye gaye string `"1432219"` mein se $k = 3$ digits hatane ke baad, bacha hua sabse chota number kya hoga? *(Note: Agar final answer ke shuru mein `0` aaye toh use remove kar dena).*

const num = "1432219";
let k = 3;

const removeKdigits = (arr, k) => {
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    let digit = arr[i];

    while (stack.length && k > 0 && stack[stack.length - 1] > digit) {
      stack.pop();
      k--;
    }

    stack.push(digit);
  }

  while (stack.length && k > 0) {
    stack.pop();
    k--;
  }

  return stack.join("");
};

console.log(removeKdigits(num, k)); //Output: "1219";
