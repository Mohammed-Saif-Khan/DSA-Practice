Palindrome ka concept bohot simple hai! Agar aap isko ek baar samajh gaye, toh DSA (Data Structures and Algorithms) ke problems aaram se hal ho jayenge.

---

### Palindrome Kya Hota Hai?

Kkoi bhi string (word/sentence) ya number jisko aap **aage se padho (left to right)** ya **piche se padho (right to left)**, woh bilkul **same** dikhta hai.

Yani, agar aap usko ulta (reverse) bhi kar do, toh usme koi badlav nahi aata.

### Examples:

_ **Words:** `Nitin`, `Radar`, `Madam`, `Racecar`
_ **Numbers:** `121`, `1331`, `4554`

Agar aap `RACECAR` ko piche se likhna shuru karoge:

_ Piche ka pehla letter: `R`
_ Dusra: `A` \* Tisra: `C` ...aur aise hi aapko wapas `RACECAR` mil jayega.

---

### DSA Problem Solve Karne Ki Approach (Logic)

DSA problems mein palindrome check karne ke do sabse popular tarike hote hain:

#### 1. Two-Pointer Approach (Sabse Efficient 🚀)

Isme hum do pointers ka use karte hain—ek bilkul shuruat mein (`left`) aur ek bilkul aakhiri mein (`right`).

_ Hum check karte hain ki kya `left` aur `right` waale characters same hain?
_ Agar same hain, toh `left` ko ek kadam aage (`left++`) aur `right` ko ek kadam piche (`right--`) badhata hain. \* Yeh loop tab tak chalta hai jab tak dono pointers bich mein nahi mil jate. Agar kahi bhi characters match nahi hue, toh woh palindrome **nahi** hai.

#### 2. Reverse Approach

_ Aap original string ya number ka ek **reverse (ulta) copy** bana lo.
_ Phir check karo: `if (original == reverse)`. Agar true hai, toh palindrome hai!

---

### Ek Choti Si Cheez Jo DSA Mein Fasati Hai!

DSA problems mein aksar aapko direct word nahi milta. Woh aapko bolenge: `"A man, a plan, a canal: Panama"`.

Isko check karne se pehle aapko:

1. Saare **Spaces** aur **Punctuation** (comma, colon) hatane padenge.
2. Sabko **Lower Case** (choti ABC) mein badalna padega.

\* Clean hone ke baaki yeh banega: `amanaplanacanalpanama` (jo ki ek perfect palindrome hai!).
