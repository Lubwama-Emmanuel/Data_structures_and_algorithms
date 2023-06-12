/////////////////////////////////////////////////////////////////
// BUBBLESORT

// NAIVE SOLUTION
// const bubbleSort = (arr) => {
//   for (j = arr.length; j > 0; j--) {
//     for (i = 0; i < arr.length; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//       }
//     }
//   }
//   return arr;
// };

// OPTIMAL SOLUTION THAT KEEPS TRACK OF THE ALREADY SORTED DATA
const bubbleSort = (arr) => {
  // noswaps checks if we looped through the array and we didnot make swaps
  // meaning that the array was partially sorted, so we break out of the loop
  let noSwaps = true;
  for (j = arr.length; j > 0; j--) {
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

console.log(bubbleSort([5, 3, 14, 1, 2]));
