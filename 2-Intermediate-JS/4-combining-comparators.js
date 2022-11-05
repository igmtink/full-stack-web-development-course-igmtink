// !Logical Operators
a > b && c < b; // AND operator
a > b || a === b; // OR operator
!(x === y); // NOT operator

// TODO: BMI Calculator (Advance)
function bmiCalculator(weight, height) {
  var bmi = Math.round(weight / (height * height));

  if (bmi < 18.5) {
    return "Your BMI is " + bmi + ", so you are underweight.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Your BMI is " + bmi + ", so you have a normal weight.";
  } else {
    return "Your BMI is " + bmi + ", so you are overweight.";
  }
}

var bmi = bmiCalculator(65, 1.8);
alert(bmi);
