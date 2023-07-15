function range(start, end, step) {
  let array = [];
  let i = start;
  if (step > 0) {
    while (i <= end) {
    array.push(i);
    i += step;
  }}
  return array;
}

// test
console.log(range(0, 8, 2));
console.log(range(-9, 3, 3));
console.log(range(-5, 2, 3));