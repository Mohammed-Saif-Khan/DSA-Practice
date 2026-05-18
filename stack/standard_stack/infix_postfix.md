# 🧮 Master Notes: Infix to Postfix & Postfix Evaluation

Hey! Agar tum yeh notes **2-3 mahine baad** padh rahe ho, to chill karo. Is document ko bina kisi complex markdown tables ke, ekdum clean aur structured bullet points mein likha gaya hai taaki raw text padhne mein bhi saari operator priority aur algorithms turant recall ho jayein.

---

## 🧠 1. Core Concept: Yeh Kis Category Mein Aate Hain?

Infix to Postfix conversion aur Postfix Evaluation dono ke dono **Normal Standard Stack (Expression Evaluation Stack)** ki category mein aate hain.

- **Monotonic Se Alag Kyun Hai?** Ismein hum elements ki values ko compare (`<` ya `>`) nahi karte. Ismein stack ka use sirf operators ki seniority (priority) ko maintain karne ke liye ya operands par calculate karne ke liye hota hai.

---

## 🎯 2. Part A: Infix to Postfix Conversion

### What is Infix & Postfix?

- **Infix:** Jahan operator do operands ke **beech mein** hota hai. (e.g., `A + B`)
- **Postfix:** Jahan operator operands ke **baad mein** aata hai. (e.g., `A B +`)

### The Operator Precedence (Seniority Rules)

Stack mein operator push karne se pehle humein unki priority check karni hoti hai:

1.  ⚡ Highest Seniority: `^` (Power/Exponentiation)
2.  ⭐ Medium Seniority: `*` aur `/` (Multiplication & Division)
3.  📉 Lowest Seniority: `+` aur `-` (Addition & Subtraction)

### The Golden Rule of Infix Stack:

> ⚠️ **Rule:** Ek "Low Seniority" operator ke upar "High Seniority" operator aaram se baith sakta hai. Lekin ek "High Seniority" operator ke upar "Low" ya "Equal" seniority ka operator nahi baith sakta. Agar aisa hota hai, to stack ke top wale operator ko pehle **POP** karke output string mein bhejna padega.

### Step-by-Step Algorithm

- **Operand (A, B, C, 1, 2) mile:** Directly output string mein daal do.
- **Opening Bracket `(` mile:** Stack mein blindly push kar do.
- **Closing Bracket `)` mile:** Stack se tab tak pop karke output mein daalo jab tak `(` na mil jaye. Uske baad `(` ko bhi pop kar do.
- **Operator (`+`, `-`, `*`, `/`) mile:** Jab tak stack ke top wale operator ki priority current operator se **badi ya barabar** hai, tab tak stack se pop karke output mein daalo. Uske baad naye operator ko stack mein push kar do.

---

### 💻 Infix to Postfix JS Template

```javascript
function getPriority(op) {
  if (op === "^") return 3;
  if (op === "*" || op === "/") return 2;
  if (op === "+" || op === "-") return 1;
  return 0; // For brackets
}

function infixToPostfix(exp) {
  let stack = [];
  let result = "";

  for (let i = 0; i < exp.length; i++) {
    let char = exp[i];

    // 1. Agar operand hai (Alphanumeric), directly output mein daalo
    if (/[a-zA-Z0-9]/.test(char)) {
      result += char;
    }
    // 2. Agar opening bracket hai, push to stack
    else if (char === "(") {
      stack.push(char);
    }
    // 3. Agar closing bracket hai, tab tak pop karo jab tak '(' na mile
    else if (char === ")") {
      while (stack.length && stack[stack.length - 1] !== "(") {
        result += stack.pop();
      }
      stack.pop(); // '(' ko nikal do
    }
    // 4. Agar operator hai
    else {
      while (
        stack.length &&
        getPriority(stack[stack.length - 1]) >= getPriority(char)
      ) {
        result += stack.pop();
      }
      stack.push(char);
    }
  }

  // Stack mein bache huye saare operators bahar nikal lo
  while (stack.length) {
    result += stack.pop();
  }

  return result;
}

// Example Usage:
// console.log(infixToPostfix("a+b*(c^d-e)")); // Output: abcd^e-*+
```
