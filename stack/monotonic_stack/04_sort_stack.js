// Question:

// Aapko ek unsorted array diya gaya hai: [3, 1, 4, 2]. Assume kijiye ki yeh array ek Stack ki tarah behave kar raha hai, jahan se elements sirf aakhiri se (pop ke zariye) nikale ja sakte hain.

// Aapko is stack ko descending order mein sort karna hai (yaani stack ke top par sabse chota element hona chahiye aur bottom par sabse bada), taaki jab aap isse final array mein return karein toh woh array ascending order [1, 2, 3, 4] mein dikhe.

// Condition: Aapko yeh kaam karne ke liye koi extra array method (jaise .sort()) use nahi karna hai. Aap sirf ek temporary stack ka use kar sakte hain elements ko hold karne ke liye.

// Is sorting algorithm ki worst-case time complexity kya hogi, aur yeh kis situation mein trigger hogi?

// Diye gaye stack ke liye final sorted output kya nikal kar aayega?

const arr = [3, 1, 4, 2];

const sortStack = (arr) => {
  let temp = [];

  while (arr.length) {
    let current = arr.pop();

    while (temp.length && temp[temp.length - 1] > current) {
      arr.push(temp.pop());
    }

    temp.push(current);
  }

  return temp;
};

console.log(sortStack(arr)); // Output: [1, 2, 3, 4]
