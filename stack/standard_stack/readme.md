# 🧱 Master Notes: Standard Stack (The Regular LIFO)

Hey! Agar tum yeh notes **2-3 mahine baad** padh rahe ho, to chill karo. Is document ko bina kisi complex tables ke, ekdum clean bullet-point structure mein likha gaya hai taaki raw `.md` text padhne mein bhi koi dikkat na ho aur saare patterns turant recall ho jayein.

---

## 🧠 1. Core Concept: Standard Stack Kya Hai?

Standard Stack ek ekdum seedha-saadha, disciplined linear data structure hai jo **LIFO (Last-In, First-Out)** principle par kaam karta hai.

- **Asli Matlab:** Jo element stack mein **sabse aakhiri (last)** mein push hoga, stack se nikalte waqt (pop hote waqt) wo **sabse pehle** bahar aayega.
- **Real-life Analogy:** Shadiyon ya mess mein rakhi hui _Plates ka dher_. Jo plate sabse upar (aakhiri mein) rakhi jaati hai, log sabse pehle usi ko uthate hain.

### 🚫 Monotonic Stack Se Alag Kyun Hai?

Standard Stack mein **Sorting ka koi niyam nahi hota**. Elements chhote hain ya bade, isse stack ko koi matlab nahi hai. Elements bas ek ke upar ek baithte chale jaate hain jab tak koi specific event (jaise operator ya matching pair) unhe pop na karwaye. Ismein value-based comparisons (`<` ya `>`) nahi hote.

---

## 🎯 2. Question Patterns (Kab Use Karna Hai?)

Interview ya LeetCode questions mein jab bhi ye 3 major scenarios dikhein, samajh jana Standard Stack ka khel hai:

### Pattern 1: Matching / Balancing (e.g., Valid Parentheses)

- **Scenario:** Brackets match karna, HTML/XML tags open-close check karna.
- **Logic:** Opening brackets (`(`, `{`, `[`) ko blindly stack mein push karo. Jaise hi koi closing bracket mile, check karo ki kya stack ke top par uski jodi (matching pair) baithi hai? Agar haan, to use pop kar do.
- **LeetCode:** LeetCode 20 (Valid Parentheses).

### Pattern 2: Expression Evaluation (e.g., Postfix / RPN)

- **Scenario:** Mathematical equations ko mathematically correct order mein solve karna.
- **Logic:** Agar number (operand) dikhe to stack mein push karo. Jaise hi koi operator (`+`, `-`, `*`, `/`) dikhe, stack se **top ke 2 numbers** ko pop karo, unpar operation perform karo, aur result wapas stack mein push kar do.
- **LeetCode:** LeetCode 150 (Evaluate Reverse Polish Notation).

### Pattern 3: State / History Tracking (e.g., Browser History)

- **Scenario:** Kisi actions ko undo karna ya steps mein peeche jaana.
- **Logic:** Har naye page URL ya user action ko stack mein push karte jao. Jab "Back" ya "Undo" action trigger ho, to stack se top element ko pop kar do taaki tum pichli state par pahunch sako.

---

## 🛠️ 3. Standard Stack Code Blueprints (JS)

### Blueprint 1: Brackets Matching Template

```javascript
function isValidParentheses(str) {
  const stack = [];
  const pairs = { ")": "(", "}": "{", "]": "[" };

  for (let char of str) {
    // Agar opening bracket hai to stack mein push karo
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      // Closing bracket aane par check karo ki stack empty to nahi
      // ya top par wrong bracket to nahi baitha
      if (stack.length === 0 || stack[stack.length - 1] !== pairs[char]) {
        return false;
      }
      stack.pop(); // Perfect match milne par pop
    }
  }
  // Agar aakhiri mein stack khali hai, matlab saare pairs valid the
  return stack.length === 0;
}
```
