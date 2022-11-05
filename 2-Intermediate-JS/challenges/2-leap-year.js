// TODO: Leap Year
function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap year.";
      } else {
        return "Not leap year.";
      }
    } else {
      ("Leap year.");
    }
  } else {
    return "Not leap year.";
  }
}

isLeapYear(1948);
