// IMPORTANT IDEA

// Every binary number creates:
// two children
// Example:

// 1
// ├── 10
// └── 11
// then
// 10
// ├── 100
// └── 101

const generateBinary = (n) => {
  let queue = ["1"];
  let result = [];

  for (let i = 0; i < n; i++) {
    let current = queue.shift();
    result.push(current);

    queue.push(current + "0");
    queue.push(current + "1");
  }

  return result;
};

console.log(generateBinary(5));
