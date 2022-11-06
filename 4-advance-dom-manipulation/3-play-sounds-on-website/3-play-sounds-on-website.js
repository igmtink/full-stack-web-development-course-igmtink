// !Play sounds on website
var allButtons = document.querySelectorAll("button");

allButtons[0].addEventListener("click", function () {
  // !Creating a variable inside function so everytime call this function it will create new variable, so it will play another (audio)
  var audio = new Audio("./sounds/tom-1.mp3");
  audio.play();
});

// !Creating a variable outside function so everyime call the function it will not create new variable, so it will not play another (audio)
var audio = new Audio("./music.mp3");

allButtons[1].addEventListener("click", function () {
  audio.play();
});

allButtons[2].addEventListener("click", function () {
  audio.pause();
});
