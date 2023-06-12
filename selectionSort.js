//////////////////////////////////////////////////////////
// SELECTION SORT

const selectionSort = (arr) => {
  let minValue = arr[0];
  let indexOfMinValue = 0;
  function swap(num1, num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
  }
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < minValue) {
        minValue = arr[j];
        indexOfMinValue = j;
      }
      // console.log(minValue, arr[j], arr[i]);
    }
    console.log(arr[indexOfMinValue]);
    let temp = arr[i];
    arr[i] = arr[indexOfMinValue];
    arr[indexOfMinValue] = temp;
    // swap(arr[i], arr[3]);
    console.log(arr);
  }
  return arr;
};

console.log(selectionSort([5, 3, 14, 1, 2]));
