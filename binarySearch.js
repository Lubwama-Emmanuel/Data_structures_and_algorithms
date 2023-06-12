//////////////////////////////////////////////////////////////////////
// BINARY SEARCH ALGORITHM

const binarySearch = (arr, num) => {
  let min = 0;
  let max = arr.length - 1;
  let middle = Math.ceil((max + min) / 2);

  while (min < max) {
    if (arr[middle] === num) {
      return middle;
    } else if (arr[middle] < num) {
      min = middle + 1;
    } else if (arr[middle] > num) {
      max = middle - 1;
    }
    middle = Math.ceil((max + min) / 2);
  }

  return -1;
};

console.log(binarySearch([1, 2, 4, 5, 6, 8, 9, 10, 12, 14, 16, 18], 5));
