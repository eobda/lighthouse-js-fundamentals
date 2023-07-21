/* Create a function named numberOfVowels that will receive a string
and return the number of vowels in that string. */

const numberOfVowels = function(data) {
  let totalVowels = 0;

  // loop through string
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "a" || data[i] === "e" || data[i] === "i" || data[i] === "o" || data[i] === "u") {
      totalVowels += 1;
    }
  }

  return totalVowels;
};

console.log(numberOfVowels("orange")); // 3
console.log(numberOfVowels("lighthouse labs")); // 5
console.log(numberOfVowels("aeiou")); // 5
