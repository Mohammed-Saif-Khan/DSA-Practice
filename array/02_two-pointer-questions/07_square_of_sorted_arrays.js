//Problem Description:Aapko ek integers (numbers) ka array diya gaya hai jo pehle se sorted order (increasing/chote se bade order) mein hai. Aapko ek naya array return karna hai jisme original array ke har ek number ka square (varg) ho, aur woh naya array bhi sorted order mein hona chahiye.

//Twist Kya Hai?Array mein negative numbers (-4, -1) bhi ho sakte hain. Jab hum negative number ka square karte hain, toh woh positive ban jata hai (jaise (-4) * (-4) = 16). Is wajah se square karne ke baad numbers ka order bigad sakta hai. Aapko bina kisi extra sorting algorithm (jaise sort()) ka use kiye, $O(N)$ time complexity mein ise sorted rakhna hai.

const num = [-4, -1, 0, 3, 10];

const squareOfSortedArray = (num) => {
  let left = 0;
  let right = num.length - 1;
  let result = new Array(num.length);
  let position = num.length - 1;

  while (left <= right) {
    let leftValue = Math.abs(num[left]);
    let rightValue = Math.abs(num[right]);

    if (leftValue > rightValue) {
      result[position] = leftValue * leftValue;
      left++;
    } else {
      result[position] = rightValue * rightValue;
      right--;
    }

    position--;
  }

  return result;
};

console.log(squareOfSortedArray(num)); // Output: [0,1,9,16,100]
