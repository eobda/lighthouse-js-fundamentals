/* 
Create a function named urlDecode that will receive a URL
encoded string, and return a JavaScript object that represents
that data.
*/
const urlDecode = function (text) {
  // return object
  let dataObject = {};

  // split at '&'
  let replaceArray = text.split('&');

  // now we have an array of "duck=rubber" like pairs
  // before = is key; after = is value
  // for each pair in array, split it into two variables (key and value)
  // then assign key and value into object

  for (let pair of replaceArray) {
    let pairArray = pair.split('=');
    let key = pairArray[0];
    let value = replaceSpaces(pairArray[1]);

    dataObject[key] = value;
  }

  return dataObject;
};

// replace '%20' with space
const replaceSpaces = function (text) {
  return text.split('%20').join(' ');
}

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);