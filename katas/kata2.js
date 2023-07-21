/* Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.

Use some sort of looping. Do Not use Array.prototype.filter()
*/

const conditionalSum = function(values, condition) {
  let sum = 0;

  // filter for condition
  if (condition === "even") {
    values.forEach(function(value) {
      if (value % 2 === 0) {
        sum += value;
      }
    })
  } else {
    values.forEach(function(value) {
      if (value % 2 !== 0) {
        sum += value;
      }
    })
  }

  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even")); // 6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); // 9
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); // 144
console.log(conditionalSum([], "odd")); // 0
