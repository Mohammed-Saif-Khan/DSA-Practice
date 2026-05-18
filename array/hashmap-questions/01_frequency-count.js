const num = [1, 2, 2, 3, 3, 3, 4, 4];
let obj = {};

for (let i = 0; i < num.length; i++) {
  if (obj[num[i]]) {
    obj[num[i]]++;
  } else {
    obj[num[i]] = 1;
  }
}

console.log(obj);
