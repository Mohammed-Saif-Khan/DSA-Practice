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

    while (stack.length && k > 0) {
      stack.pop();
      k--;
    }
  }
  return stack.join("");
};

console.log(removeKdigits(num, k));
