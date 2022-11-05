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

// TODO: BMI Calculator
function bmiCalculator(weight, height) {
  return Math.round(weight / (height * height));
}

var bmi = bmiCalculator(65, 1.8);
console.log(bmi);
