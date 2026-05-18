const arr = [1, 2, 3, 4, 5];

function reverseQueue(arr) {
  let reverseQueue = [];
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    let lastElem = arr.pop();
    reverseQueue.push(lastElem);
  }

  return reverseQueue;
}

console.log(reverseQueue(arr));
