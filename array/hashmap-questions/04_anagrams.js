function isAnagrams(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  let freq = {};

  // count characters of first string
  for (let i = 0; i < first.length; i++) {
    freq[first[i]] = (freq[first[i]] || 0) + 1;
  }

  // decrease count using second string
  for (let i = 0; i < second.length; i++) {
    if (!freq[second[i]]) {
      return false; // character missing or extra
    }
    freq[second[i]]--;
  }

  return true;
}

console.log(isAnagrams("listen", "silent")); // true
console.log(isAnagrams("rat", "car")); // false
