// !Game Sequence
// Array with colors
var buttonColours = ["red", "blue", "green", "yellow"];

// Array empty for game pattern
var gamePattern = [];

// Function for next sequence
function nextSequence() {
  // Generate random number 1 - 4
  var randomNumber = Math.floor(Math.random() * 4);
  // Pick a color from (buttonColours) using random number
  var randomChosenColour = buttonColours[randomNumber];
  // Pass the chosen color to (gamePattern)
  gamePattern.push(randomChosenColour);

  // Get the button the id of the have same color using (randomChosenColour)
  // Add animation fading
  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  // Play the sound effect of that button
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}

// Add (keydown) event listener to entire website
// Press any key to activate the (nextSequence)
$(document).keydown(function () {
  nextSequence();
});

// !Game Button
// Array empty for user button clicked
var userClickedPattern = [];

// Add (click) event listener to button
$(".btnColor").click(function () {
  // Get the (id) of that button clicked
  var userChosenColor = $(this).attr("id");
  // Add that color (id) to (userClickedPattern) everytime button is clicked, to store our clicked pattern
  userClickedPattern.push(userChosenColor);

  // Play sound everytime we click the button
  var audio = new Audio("sounds/" + userChosenColor + ".mp3");
  audio.play();

  // Add active animation
  $("#" + userChosenColor).addClass("pressed");

  setTimeout(function () {
    $("#" + userChosenColor).removeClass("pressed");
  }, 100);
});
