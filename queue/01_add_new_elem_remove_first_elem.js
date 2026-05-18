let arr = [5, 10, 15];

function addNewElemRemoveFirstElem(arr, newElem) {
  // Add new element at rear
  arr.push(newElem);

  // Remove first element from front
  arr.shift();

  // Print front element
  console.log("Front Element:", arr[0]);

  // Print rear element
  console.log("Rear Element:", arr[arr.length - 1]);

  return arr;
}

console.log(addNewElemRemoveFirstElem(arr, 20));
