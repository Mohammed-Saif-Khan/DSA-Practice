const arr = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;

const slidingWindowMaximum = (arr, k) => {
  let deque = [];

  let result = [];

  for (let right = 0; right < arr.length; right++) {
    // Remove indexes outside window
    if (deque.length && deque[0] <= right - k) {
      deque.shift();
    }

    // Remove smaller elements
    while (deque.length && arr[right] > arr[deque[deque.length - 1]]) {
      deque.pop();
    }

    // Add current index
    deque.push(right);

    // Window formed
    if (right >= k - 1) {
      result.push(arr[deque[0]]);
    }
  }

  return result;
};

console.log(slidingWindowMaximum(arr, k));
