const num = [2, 1, 3, 5, 3, 2];

const firstDuplicate = (arr) => {
  const seen = new Set();
  let duplicate = -1;

  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) {
      duplicate = arr[i];
      break;
    }
    seen.add(arr[i]);
  }

  return duplicate;
};

console.log(firstDuplicate(num));
