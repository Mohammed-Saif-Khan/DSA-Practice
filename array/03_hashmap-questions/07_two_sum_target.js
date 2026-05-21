// Tumhe ek array aur ek target number diya gaya hai.
// Tumhe do numbers ke indexes return karne hain jinka sum = target ho.
const num = [2, 7, 11, 15];
let target = 9;
let obj = {};

for (let i = 0; i < num.length; i++) {
  let needed = target - num[i];

  if (obj[needed] !== undefined) {
    console.log(obj[needed], i);
    break;
  }
  obj[num[i]] = i;
}

// const num = [3, 3];
// let target = 6;
// let obj = {};

// for (let i = 0; i < num.length; i++) {
//   let needed = target - num[i];
//   if (obj[needed] !== undefined) {
//     console.log(obj[needed], i);
//   }
//   obj[num[i]] = i;
// }
