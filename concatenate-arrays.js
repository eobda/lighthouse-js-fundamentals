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