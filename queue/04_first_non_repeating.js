let str = "aabc";

function firstNonRepeatingCharacter(s) {
  let freq = {};
  let queue = [];
  let result = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    freq[char] = (freq[char] || 0) + 1;

    queue.push(char);

    while (queue.length && freq[queue[0]] > 1) {
      queue.shift();
    }

    if (queue.length) {
      result.push(queue[0]);
    } else {
      result.push(-1);
    }
  }

  return result;
}

console.log(firstNonRepeatingCharacter(str));
