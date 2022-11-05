// TODO: Guest name party
var guestList = ["Ivan", "Martin", "Michael", "Joshua", "George", "Kit"];

var guestName = prompt("What is your name?");

if (guestList.includes(guestName)) {
  alert("Welcome " + guestName);
} else {
  alert("Sorry maybe next time.");
}
