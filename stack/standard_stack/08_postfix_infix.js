const str = "A+B*C";

const getPriority = (char) => {
  if (char === "+" || char === "-") {
    return 1;
  }

  if (char === "*" || char === "/") {
    return 2;
  }

  return 0;
};

const postInfix = (str) => {
  let stack = [];
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char >= "A" && char <= "Z") {
      result += char;
    } else {
      while (
        stack.length &&
        getPriority(stack[stack.length - 1]) >= getPriority(char)
      ) {
        result += stack.pop();
      }

      stack.push(char);
    }
  }

  while (stack.length) {
    result += stack.pop();
  }

  return result;
};

console.log(postInfix(str));
