# 🚀 The Ultimate Notes: Monotonic Stack (The Disciplined Line)

Hey! Agar tum yeh notes **2-3 mahine baad** padh rahe ho, to chill karo. Is document ko bina kisi complex markdown tables ke, ekdum clean aur structured bullet points mein likha gaya hai taaki raw text padhne mein bhi koi dikkat na ho aur 5 minute mein poora concept refresh ho jaye.

---

## 🧠 1. Core Concept: Monotonic Stack Kya Hai?

Normal stack mein hum bina kisi rule ke elements push/pop karte hain. Lekin **Monotonic Stack** ek disciplined stack hai jo apne andar ke elements ko hamesha ek **Strictly Sorted Order** mein maintain karta hai.

Yeh do tarah ke hote hain:

- **Monotonic Increasing Stack:** Niche se upar tak elements hamesha **badhte (increase)** kram mein honge.
  - _Example:_ `[1, 3, 5, 8]` (Top par hamesha sabse bada element hoga).
- **Monotonic Decreasing Stack:** Niche se upar tak elements hamesha **ghat-te (decrease)** kram mein honge.
  - _Example:_ `[8, 5, 3, 1]` (Top par hamesha sabse chhota element hoga).

> ⚠️ **The Golden Rule:** Jab bhi koi naya element stack mein aana chahta hai, wo pehle stack ke **Top** element se khud ko compare karta hai. Agar us naye element ke aane se stack ka "Sorted Order" toot raha hai, to hum stack se purane elements ko tab tak **POP** karte hain jab tak order wapas sahi na ho jaye.

---

## 🎯 2. Question Pattern (Kab Use Karna Hai?)

Interview ya LeetCode mein jab bhi yeh patterns dikhein, aankh band karke Monotonic Stack laga dena:

- **Keywords:** "Next Greater Element", "Next Smaller Element", "Previous Greater", "Nearest Smaller".
- **Scenario:** Jab tumhein kisi array mein har element ke liye uske right side ya left side mein pehla bada/chhota element dhoodna ho.
- **Brute Force vs Optimised:** Brute force se yeh $O(N^2)$ leta hai, lekin Monotonic Stack isko **$O(N)$ Time Complexity** mein solve kar deta hai kyunki har element max ek hi baar push aur ek hi baar pop hota hai.

---

## ⚡ 3. The Ratta-Maar Formula (Crucial Trick)

Tumhara sabse bada confusion: _"Bada element dhoodna hai to Increasing stack banau ya Decreasing?"_ **Answer hamesha ulta hota hai!**

- **Next Greater Element (Bada dhoodna hai):** Use 📉 **Monotonic Decreasing Stack**
  - _Kyun?_ Kyunki naya bada element (Breaker) aate hi saare purane chhote elements pop ho jayenge.
- **Next Smaller Element (Chhota dhoodna hai):** Use 📈 **Monotonic Increasing Stack**
  - _Kyun?_ Kyunki naya chhota element (Breaker) aate hi saare purane bade elements pop ho jayenge.

---

## 🛠️ 4. The Ultimate JS Template

90% monotonic stack ke questions isi boilerplate code se solve hote hain. Ismein hum VALUES nahi, balki elements ke **INDICES** store karte hain:

```javascript
function monotonicStackTemplate(arr) {
  const stack = []; // Ismein indices store honge
  const result = new Array(arr.length).fill(-1); // Default result values

  for (let i = 0; i < arr.length; i++) {
    // WHILE LOOP: Jab tak stack khali nahi hai AND order toot raha hai (Breaker aa gaya)
    while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
      // NOTE: Next Smaller ke liye bas '<' ko '>' kar dena

      const popIndex = stack.pop(); // Purana index nikalo

      // 🔥 LOGIC AREA: Jo index pop hua, uske liye 'arr[i]' hi uska Next Greater hai!
      result[popIndex] = arr[i];
    }

    // Current index ko stack mein push karo
    stack.push(i);
  }

  return result;
}
```
