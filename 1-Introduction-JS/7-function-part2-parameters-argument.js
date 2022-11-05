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
