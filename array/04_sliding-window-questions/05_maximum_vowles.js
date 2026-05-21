// Problem — Maximum Number of Vowels in a Substring of Size K
const str = "abciiidef";
const arr = str.split("");
const k = 3;

const maxVowels = (arr, k) => {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let windowVowels = 0;
  for (let i = 0; i < k; i++) {
    if (vowels.has(arr[i])) {
      windowVowels++;
    }
  }

  let maxVowels = windowVowels;
  for (let i = k; i < arr.length; i++) {
    if (vowels.has(arr[i - k])) {
      windowVowels--;
    }
    if (vowels.has(arr[i])) {
      windowVowels++;
    }

    maxVowels = Math.max(maxVowels, windowVowels);
  }

  return maxVowels;
};

console.log(maxVowels(arr, k));
