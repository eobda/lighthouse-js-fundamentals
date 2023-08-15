/*
Create a function named squareCode that will receive a message,
and return the secret square code version of the message.

HOW TO SQUARE CODE:
- The square root of 54 (Math.sqrt(54)) is 7.3484692283495345. If we round this number up (Math.ceil(Math.sqrt(54))), we get 8. If we use that for the number of characters on each line (the number of columns), then our text will be close to a square shape.

The message is then coded by reading down the columns going left to right.
*/

const squareCode = function (message) {
  // 1. remove spaces
  let text = message.split(' ').join('');
  let output = '';

  // 2. find the square root of however long the message is and round up with Math.ceil(Math.sqrt(text.length))
  let charsPerLine = Math.ceil(Math.sqrt(text.length));  

  let splitArray = splitMessage(text, charsPerLine);
  // 4. create new strings of charsPerLine length, using one character from each element of the split message array - NESTED LOOP
  // 5. return ONE STRING with spaces between the coded strings

  output = codeText(splitArray, charsPerLine);


  return output;
};

// 3. split the characters into strings of whatever the square root is length

const splitMessage = function (text, charsPerLine) {
  let output = [];
  let string = '';

  for (let x = 0; x < text.length; x++) {
    // runs the loop through the whole text

    if ((x + 1) % charsPerLine === 0) {
      string = string + text[x];

      // add current string to output, start "new" string
      output.push(string);
      string = '';
    } else {
      string = string + text[x];
    }

  }
  // add final string to array
  if (string !== '') {
    output.push(string);
  }

  return output;
}

const codeText = function (textArray, charsPerLine) {
  let output = textArray;

  // 4. create new strings of charsPerLine length, using one character from each element of the split message array - NESTED LOOP
  // 5. return ONE STRING with spaces between the coded strings


  return output;
}

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode("if man was meant to stay on the ground god would have given us roots")
);

/*
expected output:
clu hlt io
fto ehg ee dd
hae and via ecy
imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
*/