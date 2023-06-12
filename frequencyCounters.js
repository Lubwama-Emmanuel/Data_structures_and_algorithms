////////////////////////////////////////////////////////////////////////
// FREQUENCY COUNTERS
// WRITE A FUNCTION SAME, WHICH ACCEPTS TWO ARRAYS.
// THE FUNCTION SHOULD RETURN TRUE IF EVERY VALUE IN THE ARRAY HAS ITS CORRESPONDING VALUE SQUARED IN THE
// SECOND ARRAY. THE FREQUENCY OF VALUES MUST BE THE SAME

// Naive solution
// uses O(N2)
// const same = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (const v1 of arr1) {
//     let correctIndex = arr2.indexOf(v1 ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// };

// Solution with frequency counters uses O(N)
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let v1 of arr1) {
    frequencyCounter1[v1] = (frequencyCounter1[v1] || 0) + 1;
  }

  for (let v2 of arr2) {
    frequencyCounter2[v2] = (frequencyCounter2[v2] || 0) + 1;
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
};

let t1 = performance.now();
console.log(same([1, 2, 3], [4, 1, 9])); //true
let t2 = performance.now();
console.log(`Time taken is ${(t2 - t1) / 1000} seconds`);
console.log(same([1, 2, 3], [1, 9])); //false
console.log(same([1, 2, 1], [4, 4, 1])); //false (freq dont match)

////////////////////////////////////////////////////////////////////////////////////
// ANAGRAMS
// GIVEN TWO STRINGS, WRITE A FUNCTION TO DETERMINE IF THE SECOND STRING IS AN ANAGRAM OF THE FIRST.
// AN ANAGRAM IS A WORD, PHARSE OR NAME FORMAED BY REARRANGING THE LETTERS OF ANOTHER,
// SUCH AS CINEMA, FORMED FORMED FROM ICEMAN

// FREQUENCY COUNTER SOLUTION
const anagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let v1 of str1) {
    freqCounter1[v1] = (freqCounter1[v1] || 0) + 1;
  }

  for (let v2 of str2) {
    freqCounter2[v2] = (freqCounter2[v2] || 0) + 1;
  }

  for (let key in freqCounter1) {
    if (!(key in freqCounter2)) {
      return false;
    }

    if (freqCounter2[key] !== freqCounter1[key]) {
      return false;
    }
  }

  return true;
};

console.log(anagram(" ", " ")); //false
console.log(anagram("aaz", "azz")); //false
console.log(anagram("anagram", "nagaram")); //true
console.log(anagram("rat", "car")); //false
console.log(anagram("awesome", "awesom")); //false
console.log(anagram("qwerty", "qeywrt")); //true
console.log(anagram("texttwisttime", "timetwisttext")); //true
