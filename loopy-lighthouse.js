/*
Wrap the code you've written in a function called loopyLighthouse(range, multiples, words) that you call with 3 parameters.

range should be an array of 2 numbers representing the start and end values for the loop.
multiples should be an array of 2 numbers representing the multiples you want to replace with words.
words should be an array of 2 strings representing the words that will replace the multiples.

*/

function loopyLighthouse(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    let print = "";

    if (i % multiples[0] === 0) {
      print += words[0];
    }
    
    if (i % multiples[1] === 0) {
      print += words[1];
    }

  if (i % multiples[0] !== 0 && i % multiples[1] !== 0) {
      print = i;
    }

    console.log(print);
  }
}

// test
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);