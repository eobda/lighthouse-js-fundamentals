/*
Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.
*/

const sumLargestNumbers = function(data) {
  // Put your solution here
  // sort the array from lowest to highest
  let sorted = data.sort((a, b) => a - b);
  let num1 = sorted[sorted.length-1];
  let num2 = sorted[sorted.length-2];
  console.log(sorted);
  console.log(num1 + "+" + num2);
  return num1 + num2;
};

console.log(sumLargestNumbers([1, 10])); // 11
console.log(sumLargestNumbers([1, 2, 3])); // 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126
