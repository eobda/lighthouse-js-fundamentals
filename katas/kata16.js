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

  // filters input through consecutive casing styles
  output = joinCasing(words, caseParam);
  output = vowelConst(output, caseParam);
  output = upperLower(output, caseParam);

  return output;
}

const joinCasing = function (wordsArray, caseParam) {
  let output = '';

  if (caseParam.includes("camel")) {
    output = wordsArray[0].toLowerCase();
    if (wordsArray.length > 1) {
      for (let i = 1; i < wordsArray.length; i++) {
        output = output + wordsArray[i][0].toUpperCase() + wordsArray[i].slice(1);
      }
    }
  } else if (caseParam.includes("pascal")) {
    for (let i = 0; i < wordsArray.length; i++) {
      output = output + wordsArray[i][0].toUpperCase() + wordsArray[i].slice(1);
    }
  } else if (caseParam.includes("snake")) {
    output = wordsArray.join('_');
  } else if (caseParam.includes("kebab")) {
    output = wordsArray.join('-');
  } else if (caseParam.includes("title")) {
    output = wordsArray[0][0].toUpperCase() + wordsArray[0].slice(1);
    if (wordsArray.length > 1) {
      for (let i = 1; i < wordsArray.length; i++) {
        output = output + ' ' + wordsArray[i][0].toUpperCase() + wordsArray[i].slice(1);
      }
    }
  } else {
    // return array input as string
    return wordsArray.join(' ');
  }

  return output;
}

const vowelConst = function (string, caseParam) {
  let output = '';

  if (caseParam.includes("vowel")) {
    for (let i = 0; i < string.length; i++) {
      for (let j = 0; j < string[i].length; j++) {
        if (string[i][j] == 'a' || string[i][j] == 'e' || string[i][j] == 'i' || string[i][j] == 'o' || string[i][j] == 'u') {
          output += string[i][j].toUpperCase();
        } else {
          output += string[i][j].toLowerCase();          
        }
      }
    }
  } else if (caseParam.includes("consonant")) {
    for (let k = 0; k < string.length; k++) {
      for (let l = 0; l < string[k].length; l++) {
        if (string[k][l] == 'a' || string[k][l] == 'e' || string[k][l] == 'i' || string[k][l] == 'o' || string[k][l] == 'u') {
          output += string[k][l].toLowerCase();
        } else {
          output += string[k][l].toUpperCase();          
        }
      }
    }
  } else {
    return string;
  }

  return output;
}

const upperLower = function (string, caseParam) {
  let output = '';

  if (caseParam.includes("upper")) {
    output = string.toUpperCase();
  } else if (caseParam.includes("lower")) {
    output = string.toLowerCase();
  } else {
    return string;
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