// !Creating Function and Calling Function
// Creating Function
function sampleFunction() {
  var user = prompt("What is your name?");
  alert("Hello " + user);
}

// Calling Function
sampleFunction();

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

// !Outputs & Return Values
function sampleFunctionReturn(money) {
  var priceOfBottle = 1.5;
  var totalBottleCanBuy = Math.floor(money / priceOfBottle);

  // This will return the value in (sampleFunctionReturn)
  return totalBottleCanBuy;
}

var totalBottles = sampleFunctionReturn(5);
alert(totalBottles);

// !Function inside Function
function getMilk(startingMoney, costPerBottle) {
  console.log("Total bottles: " + calcBottles(startingMoney, costPerBottle));

  return calcChange(startingMoney, costPerBottle);
}

function calcBottles(startingMoney, costPerBottle) {
  var totalBottles = Math.floor(startingMoney / costPerBottle);

  return totalBottles;
}

function calcChange(startingMoney, costPerBottle) {
  var change = startingMoney % costPerBottle;

  return change;
}

console.log("Hello sir, here is your " + getMilk(5, 1.5) + " change.");
