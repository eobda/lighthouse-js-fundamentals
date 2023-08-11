// Create a function named camelCase that will convert a string to camel case, and return the result.

const camelCase = function (input) {
  // split input
  let words = input.split(' ');
  let output = words[0].toLowerCase();

  // for each input AFTER input[0], capitalize the first letter (input[x][0].toUpperCase())

  if (words.length > 1) {
    for (let i = 1; i < words.length; i++) {
      output = output + words[i][0].toUpperCase() + words[i].slice(1);
    }
  }

  return output;
};

console.log(camelCase("this is a string")); // thisIsAString
console.log(camelCase("loopy lighthouse")); // loopyLighthouse
console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious