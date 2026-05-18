const str = "23+";

const EvaluatePostfixExp = (str) => {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (!isNaN(char)) {
      stack.push(Number(char));
    } else {
      let b = stack.pop();
      let a = stack.pop();

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

console.log(EvaluatePostfixExp(str));
