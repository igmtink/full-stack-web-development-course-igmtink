function randomNum() {
  return Math.floor(Math.random() * 6) + 1;
}

var dicePlayer1 = randomNum();
document
  .querySelector("img.dice-player-1")
  .setAttribute("src", "./images/dice" + dicePlayer1 + ".png");

var dicePlayer2 = randomNum();
document
  .querySelector("img.dice-player-2")
  .setAttribute("src", "./images/dice" + dicePlayer2 + ".png");

if (dicePlayer1 > dicePlayer2) {
  document.querySelector("h1").innerHTML = "Player 1 Win!";
} else if (dicePlayer1 < dicePlayer2) {
  document.querySelector("h1").innerHTML = "Player 2 Win!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
