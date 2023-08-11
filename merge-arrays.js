/* 
function concat(arr1, arr2) {
  let newArray = [];
  arr1.forEach(function(element) {
    newArray.push(element); 
  })
  arr2.forEach(function(element) {
    newArray.push(element);
  })
  return newArray;
}

// test
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);

The function should, when given two sorted arrays containing numbers, return a sorted array of the numbers from both lists.

*/

function merge(arr1, arr2) {
  let newArray = [];
  arr1.forEach(function(element) {
    newArray.push(element); 
  })
  arr2.forEach(function(element) {
    newArray.push(element);
  })
  newArray.sort((a, b) => a - b);
  return newArray;
}

// test
console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);