// TODO: Who's Buying Lunch
var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(name) {
  var numRandom = Math.floor(Math.random() * names.length);
  return names[numRandom] + " is going to buy lunch today!";
}
