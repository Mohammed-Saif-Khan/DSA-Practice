const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

const mergeSortedArrays = (arr1, arr2) => {
  let left = 0;
  let right = 0;

  const mergedArray = [];

  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      mergedArray.push(arr1[left]);
      left++;
    } else {
      mergedArray.push(arr2[right]);
      right++;
    }
  }

  while (left < arr1.length) {
    mergedArray.push(arr1[left]);
    left++;
  }

  while (right < arr2.length) {
    mergedArray.push(arr2[right]);
    right++;
  }

  return mergedArray;
};

console.log(mergeSortedArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]
