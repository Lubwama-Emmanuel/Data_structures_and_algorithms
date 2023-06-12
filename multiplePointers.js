///////////////////////////////////////////////////////////////
// MULTIPLE POINTERS PROBLEM SOLVER
// PROBLEM 1
// WRITE A FUNCTION CALLED SUMZERO WHICH ACCEPTS A SORTED ARRAY OF INTERGERS.
// THE FUCNTION SHOULD FIND THE FIRST PAIR WHERE THE SUM IS 0. RETURN AN ARRAY THAT
// INCLUDES BPTH VALUES THAT SUM TO ZERO OR UNDEFINED IF PAIR DOESNOT EXIST.

// NAIVE SOLUTION O(N^2)
// const sumZero = (arr) => {
//   const resultArray = [];
//   for (let num of arr) {
//     for (let num2 of arr) {
//       if (num !== 0 && num + num2 === 0) {
//         resultArray.push(num);
//         resultArray.push(num2);
//         return resultArray;
//       }
//     }
//   }
// };

// OPTIMAL SOLUTION
const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

// let t1 = performance.now();
// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 7, 11])); //[-3, 3]
// let t2 = performance.now();
// console.log(`Time taken is ${(t2 - t1) / 1000} seconds`);
// console.log(sumZero([-2, 0, 1, 3])); //undefined
// console.log(sumZero([1, 2, 3])); //undefined

// /////////////////////////////////////////////////////////
// PROBLEM 2
// IMPLEMENT A FUNCTION CALLED COUNTUNIQUEVALUES, WHICH ACCEPTS
// A SORTED ARRAY, AND COUNTS THE UNQUIE VALUES IN THE ARRAY. THERE
// CAN BE NEGATIVE NUMBERS IN THE ARRAY, BUT IT WILL ALWAYS BE SORTED.

// const countUniquValues = (arr) => {
//   let countObj = {};
//   for (let num of arr) {
//     countObj[num] = (countObj[num] || 0) + 1;
//   }
//   console.log(Object.keys(countObj).length);
// };

// OPTIMAL SOLUTION
const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j <= arr.length - 1; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
};
console.log(countUniqueValues([1, 1, 1, 1, 2])); //2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //7
console.log(countUniqueValues([])); //0
