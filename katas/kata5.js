/* 
Create a function named urlEncode that will receive a string of words, and return that string with all of the whitespace characters converted to %20. If there is whitespace on the outside of the string, like in our second example above, you should only replace the whitespace within the string.

Use some sort of looping. Do Not use String.prototype.replace
*/

const urlEncode = function(text) {
  // ensure no whitespace in outside of string
  let trimmedText = text.trim();

  /*
  let replacedText = trimmedText.split(' ').join('%20'); 
  return replacedText;

  above solution is invalid, need to use looping
  */

  // create blank string
  let replacedText = "";

  // loop over trimmed string
  for (let i = 0; i < trimmedText.length; i++) {
    if (trimmedText.charAt(i) === " ") {
      // add %20 to blank string
      replacedText += "%20";
    } else {
      // add character in trimmed string to blank string
      replacedText += trimmedText.charAt(i);
    }
  }

  return replacedText;
};

console.log(urlEncode("Lighthouse Labs")); // Lighthouse%20Labs
console.log(urlEncode(" Lighthouse Labs ")); // Lighthouse%20Labs
console.log(urlEncode("blue is greener than purple for sure")); // blue%20is%20greener%20than%20purple%20for%20sure