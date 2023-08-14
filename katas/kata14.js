/*
Create a function named calculateChange that takes in a total amount of a bill and
the total cash given to pay that bill. Return a new object that describes the total
amount of change for the cashier to give back. Omit any types of change that you
shouldn't give back, i.e. if you don't give back a twenty dollar bill, don't
include it in the results.

Valid denominations are as follows:

    Twenty dollars
    Ten dollars
    Five dollars
    Two dollars
    One dollar
    Quarter (25¢)
    Dime (10¢)
    Nickel (5¢)
    Penny (1¢)

*/

const calculateChange = function (total, cash) {
  // cash minus total = amount of change to return
  let change = {};
  let changeCount = cash - total;

  // loop - start with $20, subtract until change is < 20 and add number of $20s added to object, then $10, subtract until change is < 10, etc.

  while (changeCount > 0) {

    if (changeCount >= 2000) {
      change.twentyDollar = 0;

      while (changeCount >= 2000) {
      changeCount = changeCount - 2000;
      change.twentyDollar += 1;
      }

    } else if (changeCount < 2000 && changeCount >= 1000) {
      change.tenDollar = 0;

      while (changeCount >= 1000) {
        changeCount = changeCount - 1000;
        change.tenDollar += 1;
      }

    } else if (changeCount < 1000 && changeCount >= 500) {
      change.fiveDollar = 0;

      while (changeCount >= 500) {
        change.fiveDollar += 1;
        changeCount = changeCount - 500;
      }

    } else if (changeCount < 500 && changeCount >= 200) {
      change.twoDollar = 0;

      while (changeCount >= 200) {
        change.twoDollar += 1;
        changeCount = changeCount - 200;
      }

    } else if (changeCount < 200 && changeCount >= 100) {
      change.oneDollar = 0;

      while (changeCount >= 100) {
        change.oneDollar += 1;
        changeCount = changeCount - 100;
      }

    } else if (changeCount < 100 && changeCount >= 25) {
      change.quarter = 0;

      while (changeCount >= 25) {
        change.quarter += 1;
        changeCount = changeCount - 25;
      }

    } else if (changeCount < 25 && changeCount >= 10) {
      change.dime = 0;

      while (changeCount >= 10) {
        change.dime += 1;
        changeCount = changeCount - 10;
      }

    } else if (changeCount < 10 && changeCount >= 5) {
      change.nickel = 0;

      while (changeCount >= 5) {
        change.nickel += 5;
        changeCount = changeCount - 5;
      }

    } else if (changeCount < 5 && changeCount > 0) {
      change.penny = 0;

      while (changeCount > 0) {
        change.penny += 1;
        changeCount = changeCount - 1;
      }
    }
  }

  // return object that describes change
  return change;

};

console.log(calculateChange(1787, 2000)); // { twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(2623, 4000)); // { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(501, 1000)); // { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }