// Question: Ek string di gayi hai jismein brackets hain: (), {}, aur []. Aapko check karna hai ke kya yeh input string valid hai ya nahi.

// Ek string tabhi valid hogi jab:
// Har khulne wala (open) bracket apne sahi qism ke band hone wale (close) bracket se match karein.
// Brackets sahi tarteeb (correct order) mein band hon.
// Example: "({[]})" valid hai (true), lekin "([)]" ya "(" invalid hain (false).

const str = "({[]})";

const validParenthese = (str) => {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      let top = stack[stack.length - 1];

      if (
        (char === ")" && top === "(") ||
        (char === "}" && top === "{") ||
        (char === "]" && top === "[")
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(validParenthese(str));
