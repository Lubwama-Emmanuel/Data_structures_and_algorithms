///////////////////////////////////////////////
// SLIDING WINDOW METHOD
// WRITE A FUNCTION CALLED MAXSUBARRAY WHICH ACCEPTS AN ARRAY OF INTERGERS
// AND A NUMBER CALLED N. THE FUNCTION SHOULD CALCULATE THE MAXIMUM SUM OF N
// CONSECUTIVE ELEMENTS IN THE ARRAY.

// NAIVE SOLUTION
// const maxSubarraySum = (arr, n) => {
//   if (arr.length === 0) {
//     return null;
//   }
//   let sum = 0;
//   let largest = -Infinity;

//   for (let i = 0; i <= arr.length - n; i++) {
//     for (let j = i; j <= i + (n - 1); j++) {
//       sum += arr[j];
//     }

//     if (sum > largest) {
//       largest = sum;
//     }
//     sum = 0;
//   }

//   return largest;
// };

//USING THE SLIDING WINDOW METHOD
const maxSubarraySum = (arr, n) => {
  if (arr.length < n) return null;

  let largest = 0;
  let tempSum = 0;

  for (i = 0; i < n; i++) {
    largest += arr[i];
  }
  tempSum = largest;

  for (i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    largest = Math.max(tempSum, largest);
  }

  return largest;
};
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubarraySum([], 4));
