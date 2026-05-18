const arr = [3, 1, 4, 2];

const sortStack = (arr) => {
  let temp = [];

  while (arr.length) {
    let current = arr.pop();

    while (temp.length && temp[temp.length - 1] > current) {
      arr.push(temp.pop());
    }

    temp.push(current);
  }

  return temp;
};

console.log(sortStack(arr));
