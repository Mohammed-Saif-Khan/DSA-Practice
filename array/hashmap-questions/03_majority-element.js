const arr = [3, 3, 4, 2, 3, 3, 3];
const freq = {};
let majority = null;

for (let i = 0; i < arr.length; i++) {
  freq[arr[i]] = (freq[arr[i]] || 0) + 1;
}

for (let i = 0; i < arr.length; i++) {
  if (freq[arr[i]] > Math.floor(arr.length / 2)) {
    majority = arr[i];
    break;
  }
}

console.log(majority);
