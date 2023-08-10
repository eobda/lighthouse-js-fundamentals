/*
Create a function named repeatNumbers that will return a string
with each of the given values repeated the appropriate number of
times, if there are multiple sets of values each set should be
separated by a comma. If there is only one set of values then
you should omit the comma.
*/
const repeatNumbers = function (data) {
  let outputString = '';
  
  // array in data = individual array
  for (let i = 0; i < data.length; i++) {
    // array[0] = number to be repeated, array[1] = times to repeat
    let arrayString = '';
      for (let j = 1; j <= data[i][1]; j++) {
        arrayString += data[i][0].toString();
      }
    outputString += arrayString;

    // only add if the array is NOT the one at the end
    if (i !== (data.length - 1)) {
      outputString += ', ';
    }
  }
  // OUTPUT MUST BE STRING!
  
  return outputString;
};

console.log(repeatNumbers([[1, 10]])); // 1111111111

console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
); // 11, 222

console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
); // 10101010, 343434343434, 9292