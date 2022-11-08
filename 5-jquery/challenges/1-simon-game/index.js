// !Game Sequence
// Array with colors for game pattern
var buttonColours = ["red", "blue", "green", "yellow"];

// Array empty for game pattern for tracking the game sequence
var gamePattern = [];

// Function next sequence for tracking (gamePattern)
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

  // Level will increase by 1 evertime the user pattern correct
  level++;
  $("#level-title").text("Level: " + level);

  // Everytime user pattern is correct, we call the (nextSequence) and we reset user pattern to empty array
  userClickedPattern = [];
}

// Tracking level
var level = 0;

// !Detecting when a (keyboard key) has been pressed, and you only call (nextSequence) on the first (keypress)
var start = false;
$(document).keydown(function () {
  if (start === false) {
    // If the game is started (pressed any key) call the (nextSequence) function
    nextSequence();

    start = true;

    $("#level-title").text("Level: " + level);
  }
});

// Tracking the user button clicked
var userClickedPattern = [];

// !Detecting if the game is started (start === true) we will enable all (click event listener)
// Add (click) event listener to all buttons to get (userClickedPattern)
$(".btnColor").click(function () {
  // Get the (id) of that button clicked
  var userChosenColor = $(this).attr("id");

  if (start === true) {
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

    // Checking the answer, we pass the length of user pattern (pattern)
    checkAnswer(userClickedPattern.length - 1);
  }
});

function checkAnswer(currentLevel) {
  // Now we check if the present value of two array is correct
  // gamePattern["green"] === userClickedPattern["green"] // !this is correct
  // gamePattern["green", "blue"] === userClickedPattern["green", "red"] // !this is wrong

  // Everytime the user pattern is correct we reset the (userClickedPattern) to empty array
  // gamePattern["green"] === userClickedPattern["green"] // !this is correct
  // gamePattern["green", "blue"] === userClickedPattern["green"] // !proceed to next click
  // gamePattern["green", "blue"] === userClickedPattern["green", "blue"] // !this is correct
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("Correct");

    // Now if we got the correct pattern of the two arrays, we will check the length of the two arrays if is equal, then we call (nextSequence)
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("Wrong");

    $("h1").text("Game Over, Press Any Key to Restart");

    // Play the sound effect of that button
    var audio = new Audio("./sounds/wrong.mp3");
    audio.play();

    $("body").addClass("game-over");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 1000);

    startOver();
  }
}

// !Reset all value for new game
function startOver() {
  gamePattern = [];
  start = false;
  level = 0;
}
