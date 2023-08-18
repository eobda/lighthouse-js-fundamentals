/*
Write a guessing game where the user has to guess a secret number. After
every guess the program tells the user whether their number was too large
or too small. At the end, the number of tries needed should be printed.

Inputting the same number multiple times should only count as one try. If
the user provides an answer which isn't a number, print an error message
and do not count this as a try.
*/

const prompt = require("prompt-sync")();

const numToGuess = Math.floor(Math.random() * 101);
let foundCorrectNumber = false;
let attempts = 1;
let prevAnswers = [];

while (!foundCorrectNumber) {

  // get user input
  let answer = prompt("Guess a number: ");
  console.log("> " + answer);

  // convert string input to a number
  answer = Number(answer);

  // compare the user input to the number to guess
  if (answer === numToGuess) {
    console.log(`You got it! You took ${attempts} attempts!`);
    foundCorrectNumber = true;
  } else {
    if (answer.toString() === "NaN") {
      // give error message for non-number input
      console.log("Not a number! Try again!");
    } else if (prevAnswers.includes(answer)) {
      // give error message for number already guessed
      console.log("Already Guessed!");
    } else if (answer < numToGuess) {
      console.log("Too Low!");
      attempts += 1;
      prevAnswers.push(answer);
    } else if (answer > numToGuess) {
      console.log("Too High!");
      attempts += 1;
      prevAnswers.push(answer);
    }
  }
}

/* sample output
Guess a number:
> 12
Too Low!
Guess a number:
> 65
Too High!
Guess a number:
> 65
Already Guessed!
Guess a number:
> asdf
Not a number! Try again!
Guess a number:
> 42
You got it! You took 3 attempts!
*/