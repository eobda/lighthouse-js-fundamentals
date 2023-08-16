/*
Create a function named makeCase that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

CAMEL: thisIsCamelCase
PASCAL: ThisIsPascalCase
SNAKE: this_is_snake_case
KEBAB: this-is-kebab-case
TITLE: This Is Title Case

VOWEL: thIs Is vOwEl cAsE
CONSONANT: THiS iS CoNSoNaNT CaSe

UPPER: THIS IS UPPERCASE
LOWER: this is lowercase

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

    camel, pascal, snake, kebab, title
    vowel, consonant
    upper, lower

Our function should be able to handle all of these cases.
*/

const makeCase = function(input, caseParam) {
  // split input
  let words = input.split(' ');
  let output = '';

  // group these together?
  output = joinCasing(words, caseParam);
  output = vowelConst(output, caseParam);

  return output;
}

const joinCasing = function (words, caseParam) {
  let output = '';

  if (caseParam.includes("camel")) {
    output = words[0].toLowerCase();
    if (words.length > 1) {
      for (let i = 1; i < words.length; i++) {
        output = output + words[i][0].toUpperCase() + words[i].slice(1);
      }
    }
  } else if (caseParam.includes("pascal")) {
    for (let i = 0; i < words.length; i++) {
      output = output + words[i][0].toUpperCase() + words[i].slice(1);
    }
  } else if (caseParam.includes("snake")) {
    output = words.join('_');
  } else if (caseParam.includes("kebab")) {
    output = words.join('-');
  } else if (caseParam.includes("title")) {
    output = words[0][0].toUpperCase() + words[0].slice(1);
    if (words.length > 1) {
      for (let i = 1; i < words.length; i++) {
        output = output + ' ' + words[i][0].toUpperCase() + words[i].slice(1);
      }
    }
  }

  return output;
}

const vowelConst = function (input, caseParam) {
  let output = '';

  if (caseParam.includes("vowel")) {
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] == 'a' || input[i][j] == 'e' || input[i][j] == 'i' || input[i][j] == 'o' || input[i][j] == 'u') {
          output += input[i][j].toUpperCase();
        } else {
          output += input[i][j].toLowerCase();          
        }
      }
    }
  } else if (caseParam.includes("consonant")) {
    for (let k = 0; k < input.length; k++) {
      for (let l = 0; l < input[k].length; l++) {
        if (input[k][l] == 'a' || input[k][l] == 'e' || input[k][l] == 'i' || input[k][l] == 'o' || input[k][l] == 'u') {
          output += input[k][l].toLowerCase();
        } else {
          output += input[k][l].toUpperCase();          
        }
      }
    }
  }

  return output;
}

console.log(makeCase("this is a string", "camel")); // thisIsAString
console.log(makeCase("this is a string", "pascal")); // ThisIsAString
console.log(makeCase("this is a string", "snake")); // this_is_a_string
console.log(makeCase("this is a string", "kebab")); // this-is-a-string
console.log(makeCase("this is a string", "title")); // This Is A String
console.log(makeCase("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCase("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCase("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING