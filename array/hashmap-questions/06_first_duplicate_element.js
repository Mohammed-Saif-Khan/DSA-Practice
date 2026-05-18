const num = [2, 1, 3, 5, 3, 2];
const seen = new Set();

let duplicate = -1;

for (let i = 0; i < num.length; i++) {
  if (seen.has(num[i])) {
    duplicate = num[i];
    break;
  }
  seen.add(num[i]);
}

console.log(duplicate);
