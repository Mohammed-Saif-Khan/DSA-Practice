// Question: Ek string di hui hai str, us mein se jitne bhi saath wale (adjacent) duplicates hain, unhe tab tak hatana hai jab tak saare khatam na ho jayen. Aakhir mein jo bachi hui string hogi, use return karna hai.

// Example: Agar input "abbaca" hai, to pehle "bb" hatega, jisse string "aaca" banegi. Phir naye saath wale "aa" hatenge, to aakhir mein sirf "ca" bachega.

const str = "abbaca";

const removeAdjacentDuplicates = (str) => {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (stack[stack.length - 1] === str[i]) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }

  return stack.join("");
};

console.log(removeAdjacentDuplicates(str));
