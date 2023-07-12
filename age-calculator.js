const ageCalculator = function(name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  return name + " is " + age + " years old.";
}

//test
console.log(ageCalculator("Suzie", 1983, 2015)); // should return ""Suzie is 32 years old."
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));