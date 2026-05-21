# Two-Pointer Se Merge Sorted Arrays Solve Karna 🚀

Aksar hum 1-2 mahine baad code dekh kar bhool jaate hain ki logic kya lagaya tha. Yeh README aapko hamesha yaad dilayega ki is problem ko bina rate (memorize) kaise solve karna hai.

---

## 📌 Problem Kya Hai?

Aapko do **already sorted** (chote se bade order mein) arrays milenge:

- `arr1 = [1, 3, 5]`
- `arr2 = [2, 4, 6]`

Aapko in dono ko mila kar ek **single sorted array** banana hai: `[1, 2, 3, 4, 5, 6]`.

---

## 💡 Core Logic & Trick (The "Race" Strategy)

Ratta maarne ki jagah isko ek **game** ki tarah samjho.

Socho `arr1` aur `arr2` do alag-alag lines hain, aur dono lines ke pehle bande ke paas ek token hai. Hum dono lines ke tokens ko compare karenge. Jiska token **chota** hoga, usko hum sabse pehle nayi line (`mergedArray`) mein bhej denge.

Isko track karne ke liye hum do pointers ka use karte hain:

- `left`: Yeh track karega ki `arr1` mein hum kis element par hain (shuruat `0` index se hogi).
- `right`: Yeh track karega ki `arr2` mein hum kis element par hain (shuruat `0` index se hogi).

---

## 🚶‍♂️ Step-by-Step Walkthrough (Dry Run)

Chalo dekhte hain humara code background mein kaise kaam kar raha hai:

### Phase 1: Jab tak dono arrays mein elements baaki hain (`while (left < arr1.length && right < arr2.length)`)

- **Step 1:**
  - `left = 0` (element is `1`), `right = 0` (element is `2`)
  - Kya `1 < 2`? **Haan!**
  - `1` ko `mergedArray` mein daalo. `left++` karo (ab `left = 1` ho gaya).
  - `mergedArray = [1]`

- **Step 2:**
  - `left = 1` (element is `3`), `right = 0` (element is `2`)
  - Kya `3 < 2`? **Nahi!**
  - `2` ko `mergedArray` mein daalo. `right++` karo (ab `right = 1` ho gaya).
  - `mergedArray = [1, 2]`

- **Step 3:**
  - `left = 1` (element is `3`), `right = 1` (element is `4`)
  - Kya `3 < 4`? **Haan!**
  - `3` ko `mergedArray` mein daalo. `left++` karo (ab `left = 2` ho gaya).
  - `mergedArray = [1, 2, 3]`

- **Step 4:**
  - `left = 2` (element is `5`), `right = 1` (element is `4`)
  - Kya `5 < 4`? **Nahi!**
  - `4` ko `mergedArray` mein daalo. `right++` karo (ab `right = 2` ho gaya).
  - `mergedArray = [1, 2, 3, 4]`

- **Step 5:**
  - `left = 2` (element is `5`), `right = 2` (element is `6`)
  - Kya `5 < 6`? **Haan!**
  - `5` ko `mergedArray` mein daalo. `left++` karo (ab `left = 3` ho gaya).
  - `mergedArray = [1, 2, 3, 4, 5]`

Humara pehla `while` loop yahan **ruk jayega** kyunki `left` ab `3` ho chuka hai, jo ki `arr1.length` ke barabar hai (yaani `arr1` khatam!).

---

### Phase 2: bache kuche elements ko sametna (Cleanup Loops)

Abhi `arr2` ka element `6` bacha hua hai (`right = 2`). Humare code mein jo aakhiri do `while` loops hain, woh isi kaam ke liye hain:

1. **`while (left < arr1.length)`**: Yeh loop check karta hai ki kya `arr1` mein kuch bacha hai? Humare case mein nahi bacha, toh yeh skip ho jayega.
2. **`while (right < arr2.length)`**: Yeh loop check karta hai ki kya `arr2` mein kuch bacha hai? Haan, `6` bacha hai! Yeh chupchaap `6` ko uthakar `mergedArray` ke piche push kar dega aur `right++` kar dega.

**Final Result:** `[1, 2, 3, 4, 5, 6]` 🎉

---

## 🛠️ Code Structure Cheat-Sheet

Aapko bas 3 blocks yaad rakhne hain:

1. **Pointers Setup:** `left = 0`, `right = 0` aur ek khali array.
2. **The Comparison Loop:** Jab tak dono pointers valid hain, chote waale ko push karo aur uske pointer ko aage badhao.
3. **The Leftovers:** Jo bhi array bach gaya (chahe `arr1` ho ya `arr2`), uske bache hue saare elements ko line se direct copy-paste maar do kyunki woh pehle se sorted hain!

## ⏱️ Complexity

- **Time Complexity:** `O(N + M)` — Jahan `N` aur `M` dono arrays ki lengths hain. Hum har element ko sirf ek hi baar check kar rahe hain, isliye yeh super fast hai!
- **Space Complexity:** `O(N + M)` — Kyunki hum ek naya array bana kar usme saare elements store kar rahe hain.
