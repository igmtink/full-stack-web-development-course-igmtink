// !Get random number between (0 - 0.9999999999999999) and it will never reach at (1)
var numRandom = Math.random();

// !To get the number your desire example (1 - 6) use (numRandom * 6) but this number it will never reach (6) it's just only (0 - 5) and with a (16 decimals)
numRandom = numRandom * 6;

// !To achieve our desire number (1 - 6) we use (Math.floor(numRandom) + 1) this method we can round of the decimals and the (+ 1) so it will reach the (0 + 1 = 1) and (5 + 1 = 6)
numRandom = Math.floor(numRandom) + 1;

// TODO: Love Calculator
var yourName = prompt("What is your name?");
var partnerName = prompt("What is your partner name?");

// Getting random number between (0 - 0.9999999999999999)
var lovePercentage = Math.random();
// Now we set our desire number between (0 - 99.9999999999999999)
lovePercentage = lovePercentage * 100;
// And we round off our desire number and add 1 to achieve our (1 - 100)
lovePercentage = Math.floor(lovePercentage) + 1;

alert(
  yourName + " and " + partnerName + " Love score: " + lovePercentage + "%"
);
