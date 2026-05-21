// Problem - Longest Substring without Repeating Characters
const str = "abcabcbb";

const longestSubString = (str) => {
  const set = new Set();
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }

    set.add(str[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

console.log(longestSubString(str));
