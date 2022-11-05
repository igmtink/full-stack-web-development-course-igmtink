// !Parameters and Arguments
// Parameters (functionName(Parameters))
function sampleFunctionParameters(money) {
  var price = 1.5;
  var totalBottles = Math.floor(money / price);

  console.log("Buy " + totalBottles + " bottles of milk.");
}

sampleFunctionParameters(5);

// !More Parameters
function sampleFunctionMoreParameters(startingMoney, costPerBottle) {
  var totalBottleCanBuy = Math.floor(startingMoney / costPerBottle);

  console.log(totalBottleCanBuy);
}

sampleFunctionMoreParameters(5, 1.5);

// TODO: Life in Weeks
// Formula
// totalLeft = currentAge - futureAge
// daysLeft = totalLeft * 365 (days in a year)
// weeksLeft = totalLeft * 52 (weeks in a year)
// monthsLeft = totalLeft * 12 (months in a year)

function lifeInWeeks(age) {
  /************Don't change the code above************/
  var m = 12,
    w = 52,
    d = 365,
    agePresent = 90,
    totalLeft = agePresent - age;

  var remainingDays = totalLeft * d,
    remainingWeeks = totalLeft * w,
    remainingMonths = totalLeft * m;

  console.log(
    "You have " +
      remainingDays +
      " days, " +
      remainingWeeks +
      " weeks, " +
      "and " +
      remainingMonths +
      " months left."
  );
  /*************Don't change the code below**********/
}

lifeInWeeks(prompt("What is your current age?"));
