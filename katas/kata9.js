// Create a function named camelCase that will convert a string to camel case, and return the result.

const camelCase = function (input) {
  // split input
  let output = input.split(' ');
  // for each input AFTER input[0], capitalize the first letter (input[x][0].toUpperCase())
  if (output.length > 1) {
    for (let i = 1; i < output.length; i++) {
      let upper = output[i].charAt(0).toUpperCase();
      output[i][0] = upper;
      console.log(upper);
    }
  }
  // join input with no spaces
  return output.join('');
};

console.log(camelCase("this is a string")); // thisIsAString
console.log(camelCase("loopy lighthouse")); // loopyLighthouse
console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious