Imagine karo ki ek lambi, patli gufa (tunnel) hai jismein ek ke baad ek space rocks (asteroids) enter kar rahe hain.

Yeh tunnel itni patli hai ki rocks ek dusre ko cross nahi kar sakte. Agar do rocks aamne-saamne aayenge, to unki takkar (collision) pakka hai!

Hamare paas teen rules hain:

Direction: Jo rocks plus (+) wale hain, woh right side bhaag rahe hain (->). Jo minus (-) wale hain, woh left side bhaag rahe hain (<-).

Size: Number jitna bada, rock utna hi bada aur takatwar.

Takkar: Jab ek right jaane wala rock (+) aur left jaane wala rock (-) aamne-saamne aate hain, to blast hota hai! Bada rock chhote rock ko phod deta hai. Agar dono bilkul barabar size ke hain, to dono blast ho jaate hain.

Chalo dekhte hain is code mein kya chal raha hai!

Kahani: Gufa aur Asteroids
Hamare paas ek stack naam ki line (gufa) hai, jahan hum rocks ko ek-ek karke bhejenge. Hamari line mein teen rocks khade hain: [5, 10, -5].

Step 1: Pehla rock aaya (5)
Yeh 5 hai (plus hai, matlab right ja raha hai ->).

Abhi gufa khali hai, to yeh chupchap andar chala gaya.

Gufa ka haal: [5]

Step 2: Dusra rock aaya (10)
Yeh 10 hai (yeh bhi plus hai, right ja raha hai ->).

Gufa mein pehle se 5 baitha hai, jo isi ke piche-piche right ja raha hai. Dono ek hi direction mein hain, to koi takkar nahi hogi!

Gufa ka haal: [5, 10]

Step 3: Teesra rock aaya (-5) — Asli Tamasha!
Yeh -5 hai (minus hai, matlab yeh ulti direction mein left aa raha hai <-).

Gufa ke muh par sabse aage kaun khada hai? 10!

Ab 10 ja raha hai right -> aur -5 aa raha hai left <-. BOOM! Takkar!

Kaun jitega? 10 bada hai -5 se, isliye 10 ne -5 ko phod diya! -5 khatam (destroyed).

Kyunki -5 raste se hat gaya, ab koi ladai nahi hogi.

Gufa ka haal: [5, 10]

Code Kya Kar Raha Hai? (In Short)
let stack = []; — Yeh hamari gufa hai jahan rocks line lagakar khade hote hain.

while (...) — Yeh loop tab tak chalta hai jab tak takkar hoti rahe (jab tak gufa mein koi right jaane wala rock ho aur naya rock left aa raha ho).

stack.pop(); — Agar naya rock bada nikalta hai, to woh gufa ke andar wale rock ko phod deta hai (pop matlab gufa se bahar nikal dena).

stack.push(current); — Agar naya rock sabse ladkar bach jata hai, to woh gufa ke andar safe baith jata hai.

Final Answer: Sab khatam hone ke baad gufa mein sirf [5, 10] bachenge, kyunki unhone -5 ko raste mein hi dher kar diya!
