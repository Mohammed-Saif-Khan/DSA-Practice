const str = "saif";

const reverseString = (str) => {
  let stack = [];
  let result = [];

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  for (let j = 0; j < str.length; j++) {
    let stackElem = stack.pop();
    result.push(stackElem);
  }

  return result.join("");
};

console.log(reverseString(str));
