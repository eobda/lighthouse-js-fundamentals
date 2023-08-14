/*
Create a function named talkingCalendar that takes in a date string with the
format YYYY/MM/DD, and returns a new human readable date that looks like
December 2nd, 2017.
*/

const talkingCalendar = function (date) {
  let humanDate = '';
  let dateArray = date.split("/");
  
  // dateArray[0] is year; dateArray[1] is month; dateArray[2] is day
  humanDate = `${getMonth(dateArray[1])} ${getDay(dateArray[2])}, ${dateArray[0]}`;

  return humanDate;
};

const getMonth = function (numMonth) {
  switch (numMonth.toString()) {
    case '01':
      return 'January';
    case '02':
      return 'February';
    case '03':
      return 'March';
    case '04':
      return 'April';
    case '05':
      return 'May';
    case '06':
      return 'June';
    case '07':
      return 'July';
    case '08':
      return 'August';
    case '09':
      return 'September';
    case '10':
      return 'October';
    case '11':
      return 'November';
    case '12':
      return 'December';
  }
}

const getDay = function (numDay) {
  let day = '';

  // remove initial 0 if present
  if (numDay[0] === '0') {
    day += numDay.slice(1);
  } else {
    day += numDay;
  }
  
  // if numDay is 1, 21, 31 add "st"; if numDay is 2, 22 add "nd"; if numDay is 3, 23 add "rd"; else add "th"
  if (day === '1' || day === '21' || day === '31') {
    day += 'st';
  } else if (day === '2' || day === '22') {
    day += 'nd';
  } else if (day === '3' || day === '23') {
    day += 'rd';
  } else {
    day += 'th';
  }

  return day;
}

console.log(talkingCalendar("2017/12/02")); // December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987
