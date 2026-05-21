// Read Palindrom.md file to understand the problem statement and approach to solve the problem.
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("level")); // true
