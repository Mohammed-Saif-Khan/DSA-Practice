# 🌧️ Trapping Rain Water (Ekdum Aasan Bhasha Me)

Hey! Agar aapko coding boring lagti hai, toh chalo ek mazedar kahani se samajhte hain ki **Trapping Rain Water** problem kaise kaam karti hai aur isme **Monotonic Decreasing Stack** ka kya jadu hai.

---

## 🏢 Kahani: Lego Blocks Aur Baarish

Imagine karo aapke paas alag-alag unchai (heights) ke Lego blocks hain aur aapne unhe ek line me khada kar diya hai. Achanak upar se bohot tez baarish shuru ho jati hai!

Ab aap socho, paani kahan rukega (trap hoga)?
Kya paani kisi aisi building ke upar rukega jo sabse unchi hai? Nahi, wahan se toh paani beh jayega!

Paani sirf wahan rukega jahan ek **"Gaddha" (Ditch/U-Shape)** banega.
Gaddha kab banta hai? Jab:

1. Left side me ek unchi wall ho.
2. Beech me thodi choti jagah ya khali gaddha ho.
3. Right side me ek aur unchi wall aa jaye.

> **Simple Rule:** Jab tak paani ko dono taraf se do unchi deewarein nahi gherengi, tab tak paani trap nahi ho sakta!

---

## 🎒 Monotonic Decreasing Stack Kya Hai?

Aapke paas ek jadu ka **School Bag (Stack)** hai. Is bag ka ek sakht rule hai:

- Isme aap blocks ko sirf bade se chote order me rakh sakte ho (Jaise pehle 4, fir 2, fir 0).
- Jab tak chote blocks aayenge, aap unhe bag me daalte jaoge. Isko coding me **Monotonic Decreasing Stack** bolte hain.

### Hum iska use kyun karte hain?

Kyunki jab tak blocks chote hote ja rahe hain (4 -> 2 -> 0), iska matlab hum **gaddhe ke andar gehre** ja rahe hain. Abhi tak humein right side ki deewar nahi mili hai, isliye hum chupchaap unhe bag me save karte hain.

---

## 💥 Jadu Tab Hota Hai Jab Bada Block Aata Hai!

Maan lo aapke bag me pehle se teen blocks hain: **4**, **2**, aur **0**. (Heights ghatt rahi hain, sab shant hai).

Achanak, ek naya block aata hai jiski height hai **3**!

1. **Rule Tuta:** Naya block (`3`), bag ke sabse upar wale block (`0`) se bada hai! Iska matlab humein hamari **Right Wall** mil gayi!
2. **Gaddhe ka Bottom Mila:** Bag ke sabse upar wale block (`0`) ko bahar nikalo. Ye hamara gaddha hai jisme paani bharna hai.
3. **Left Wall Mili:** Jab `0` bahar nikal gaya, toh bag me uske theek peeche kaun bacha tha? Block **2**! Ye ban gayi hamari Left Wall.

Ab dekho, block `0` dono taraf se ghir gaya: Left me `2` hai aur Right me `3` hai.

### 🧮 Paani Kaise Napa?

- **Paani ki unchai (Height):** Left wall (`2`) aur Right wall (`3`) me se jo bhi choti hai, use pakdo. Choti deewar `2` hai. Ab isme se gaddhe ki zameen (`0`) minus kar do:  
  $$2 - 0 = 2 \text{ unit uncha paani}$$
- **Paani ki chaudai (Width):** Dono deewaron ke beech me kitni jagah hai, usse multiply kar do.

**Boom! 💥** Aapne gaddhe ka paani nikal liya. Ab aap naye block `3` ko bag me daal sakte ho kyunki ab bag wapas bade-se-chote order (`4` aur `3`) me aa gaya hai.

---

## ✨ Short Summary (Yaad Rakhne Ke Liye)

- **Bag me daalna:** Jab tak zameen neeche ja rahi hai (gaddha ban raha hai).
- **Bag se nikalna (Pop):** Jab achanak ek unchi deewar aaye, toh peeche waale gaddhon ko ek-ek karke upar tak paani se bhar do!

Yahi wajah hai ki hum decreasing stack use karte hain, taaki humein humesha pata ho ki gaddhe ka bottom kahan hai aur uske left me kaunsi deewar khadi thi!
