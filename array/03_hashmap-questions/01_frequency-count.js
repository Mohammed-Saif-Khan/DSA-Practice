// Problem - Frequency Count of Elements in an Array
const num = [1, 2, 2, 3, 3, 3, 4, 4];

const frequencyCount = (num) => {
  let obj = {};

  for (let i = 0; i < num.length; i++) {
    obj[num[i]] = (obj[num[i]] || 0) + 1;
  }

  return obj;
};

console.log(frequencyCount(num)); // Output: { '1': 1, '2': 2, '3': 3, '4': 2 }
