// In hot potato we have a group of children standing in a circle. They start passing an item, the "hot potato", around the circle. After a certain number of passes, the child holding the hot potato is eliminated from the circle. The game continues until only one child remains, who is declared the winner.

// What Does k = 3 Mean?

// In the context of the hot potato game, k = 3 means that the hot potato will be passed around the circle three times before a child is eliminated. This means that after every third pass, the child currently holding the hot potato will be removed from the game. The process continues until only one child remains, who is declared the winner.

let arr = ["A", "B", "C", "D", "E"];
let k = 3;

function hotPotato(arr, k) {
  while (arr.length > 1) {
    let n = 0;
    while (n < k - 1) {
      let firstElem = arr.shift();
      arr.push(firstElem);
      n++;
    }
    arr.shift();
  }
  return arr;
}

console.log(hotPotato(arr, k));
