// **Question:**

// Aapko ek non-negative integers ka array diya gaya hai jo ek elevation map (bars ki heights) ko represent karta hai, jahan har ek bar ki width `1` hai: `[4, 2, 0, 3, 2, 5]`.

// Agar bars ke beech mein baarish ka paani iktha (trap) hota hai, toh aapko ek efficient algorithm likhna hai jo yeh calculate kare ki **pure histogram map mein total kitna paani trap hoga**. Paani tabhi trap ho sakta hai jab kisi bar ke dono taraf (left aur right) usse bade bars maujood hon.

// 1. Is problem ko **$O(n)$ time complexity** mein solve karne ke liye "Monotonic Stack" (Increasing ya Decreasing) ka use kaise kiya jata hai? Jab ek bada bar milta hai, toh stack se `middle` element ko pop karne ke baad trapped water ki **height** aur **width** calculate karne ka formula kya hota hai?
// 2. Diye gaye heights array `[4, 2, 0, 3, 2, 5]` ke liye total trapped water ka final numerical answer kya hoga?

const arr = [4, 2, 0, 3, 2, 5];

const trapWater = (arr) => {
  let stack = [];
  let totalWater = 0;

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
      let middle = stack.pop();

      if (stack.length === 0) {
        break;
      }

      let leftWall = stack[stack.length - 1];
      let width = i - leftWall - 1;
      let height = Math.min(arr[leftWall], arr[i]) - arr[middle];

      totalWater += width * height;
    }

    stack.push(i);
  }

  return totalWater;
};

console.log(trapWater(arr));
