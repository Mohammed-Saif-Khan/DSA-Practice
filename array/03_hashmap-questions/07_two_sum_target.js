// Tumhe ek array aur ek target number diya gaya hai.
// Tumhe do numbers ke indexes return karne hain jinka sum = target ho.
const twoSum = (nums, target) => {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (obj.hasOwnProperty(complement)) {
      return [obj[complement], i];
    } else {
      obj[nums[i]] = i;
    }
  }
  // Agar koi match nahi mila, toh standard array return karein
  return [];
};

// console.log lagana zaroori hai output dekhne ke liye
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
