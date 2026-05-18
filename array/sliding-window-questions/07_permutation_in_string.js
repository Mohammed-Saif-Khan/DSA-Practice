const s1 = "ab";
const s2 = "eidbaooo";

const permutationInString = (s1, s2) => {
  let s1Map = {};
  let s2Map = {};

  for (let i = 0; i < s1.length; i++) {
    s1Map[s1[i]] = (s1Map[s1[i]] || 0) + 1;
  }

  for (let j = 0; j < s2.length; j++) {
    s2Map[s2[j]] = (s2Map[s2[j]] || 0) + 1;
  }

  for (let right = s1.length; right < s2.length; right++) {
    if (JSON.stringify(s1Map) === JSON.stringify(s2Map)) return true;

    s2Map[s2[right]] = (s2Map[s2[right]] || 0) + 1;

    let left = right - s1.length;
    s2Map[s2[left]]--;
    if (s2Map[s2[left]] === 0) return delete s2Map[s2[left]];
  }

  return JSON.stringify(s1Map) === JSON.stringify(s2Map);
};

console.log(permutationInString(s1, s2));
