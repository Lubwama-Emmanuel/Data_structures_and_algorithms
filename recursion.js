/////////////////////////////////
// RECURSION
// FACTORIAL

const factorial = (num) => {
  if (num === 1) return 1;
  return num * factorial(num - 1);
};

// console.log(factorial(4)); //24
// console.log(factorial(10));

//////////////////////////////////////////////////////
// CAPITALIZE FIRST LETTER OF WORD

const capitalizeFirstLetter = (str) => {
  const strArray = str.split(" ");
  let final = "";

  function helper(arr) {
    arr[0][0].toUpperCase();

    final += arr[0];
  }
  helper(strArray);
  console.log(final);
};

console.log(capitalizeFirstLetter("my name is lubwama")); //My Name Is Lubwama
