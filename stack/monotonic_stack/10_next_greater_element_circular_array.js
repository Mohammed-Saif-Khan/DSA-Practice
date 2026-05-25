// **Question:**

// Aapko ek integer array diya gaya hai: `[1, 2, 1]`. Assume kijiye ki yeh ek **Circular Array** hai, yaani array ka aakhiri element khatam hone ke baad dobara pehla element shuru ho jata hai (jaise ek circle mein).

// Aapko har ek element ke liye uska **Next Greater Element** dhundna hai. Kyunki array circular hai, aap kisi element ka bada padosi dhyan se right side par pure circle mein ghum kar bhi dhoodh sakte hain. Agar pure array mein kisi element se bada koi aur number nahi hai, toh uski jagah `-1` output hona chahiye.

// 1. Ek normal array ke mukable, circular array mein Next Greater Element dhoodhne ke liye hum loop ko `arr.length * 2 - 1` se kyun chalate hain aur `i % arr.length` ka kya kaam hai?
// 2. Diye gaye circular array `[1, 2, 1]` ke liye final output array kya nikal kar aayega?

const arr = [1, 2, 1];

const nextGreaterElemCircularArray = (arr) => {
  let stack = [];

  let result = new Array(arr.length).fill(-1);

  for (let i = arr.length * 2 - 1; i >= 0; i--) {
    let index = i % arr.length;

    while (stack.length && stack[stack.length - 1] <= arr[index]) {
      stack.pop();
    }

    if (i < arr.length) {
      if (stack.length) {
        result[index] = stack[stack.length - 1];
      }
    }
    stack.push(arr[index]);
  }

  return result;
};

console.log(nextGreaterElemCircularArray(arr));
