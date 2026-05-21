const str = "AABABBA";
const k = 1;

const longestRepeatingChar = (str, k) => {
  let freq = {};
  let left = 0;
  let maxFreq = 0;
  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {
    freq[str[right]] = (freq[str[right]] || 0) + 1;

    maxFreq = Math.max(maxFreq, freq[str[right]]);

    while (right - left + 1 - maxFreq > k) {
      freq[str[left]]--;
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

console.log(longestRepeatingChar(str, k));
