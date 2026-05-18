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
