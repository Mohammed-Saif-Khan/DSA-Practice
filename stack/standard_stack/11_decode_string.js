const str = "3[a2[c]]";

const decodeString = (str) => {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char !== "]") {
      stack.push(char);
    } else {
      let currentString = "";
      while (stack[stack.length - 1] !== "[") {
        currentString = stack.pop() + currentString;
      }

      stack.pop();

      let number = Number(stack.pop());
      let decoded = currentString.repeat(number);
      stack.push(decoded);
    }
  }

  return stack.join("");
};

console.log(decodeString(str)); //output: "accaccacc";
