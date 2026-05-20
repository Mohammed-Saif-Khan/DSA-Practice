const str = "+23";

const prefixExpression = (str) => {
  let stack = [];

  for (let i = str.length - 1; i >= 0; i--) {
    let char = str[i];

    if (!isNaN(char)) {
      stack.push(Number(char));
    } else {
      let a = stack.pop();
      let b = stack.pop();
      let result;

      switch (char) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          result = a / b;
          break;
      }

      stack.push(result);
    }
  }

  return stack.pop();
};

console.log(prefixExpression(str));
