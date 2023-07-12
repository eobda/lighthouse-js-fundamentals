const howManyHundreds = function(num) {
  let remainder = num % 100;
  if (remainder > 0) {
    num -= remainder;
  }

  return num / 100;
}

//test
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);