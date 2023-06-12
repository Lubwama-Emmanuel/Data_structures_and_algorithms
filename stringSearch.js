/////////////////////////////////////////////////////////////////
// FUNCTION THAT RETURNS TEH NUMBER OF A SHORT STRING OCCURANCE IN A LONG STRING

const stringSearch = (str, s) => {
  let count = 0;

  for (i = 0; i < str.length; i++) {
    for (j = 0; j < str.length; j++) {
      if (str[i + j] !== s[j]) {
        break;
      }
      if (j === s.length - 1) {
        count++;
      }
    }
  }
  console.log(count);
  return count;
};
console.log(stringSearch("wowomgzomg", "omg"));
