// Count the Even Number in an Array
const countEvenNumber = (arr) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
};

console.log(countEvenNumber([1, 2, 3, 4, 5, 6]));
