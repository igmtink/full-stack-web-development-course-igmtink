// !Button Event Listener
var numberOfDrumsButton = document.querySelectorAll(".drum");

for (var i = 0; i < numberOfDrumsButton.length; i++) {
  numberOfDrumsButton[i].addEventListener("click", function () {
    // !(this.innerHTML) is getting the value/text of that element clicked
    var drumClicked = this.innerHTML;

    // !Passing the (key) to (function) to triggered the function
    makeSound(drumClicked);
    btnAnimation(drumClicked);
  });
}

// !Keyboard Event Listener
document.addEventListener("keydown", function (event) {
  // !Passing the (key) to (function) to triggered the function
  makeSound(event.key);
  btnAnimation(event.key);
});

// !Function/Method for playing drum kit
function makeSound(key) {
  // !Swtich statements, it is like (if - else if - else)
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();

      console.log(key);
      break;

    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();

      console.log(key);
      break;

    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();

      console.log(key);
      break;

    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();

      console.log(key);
      break;

    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();

      console.log(key);
      break;

    case "k":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();

      console.log(key);
      break;

    case "l":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();

      console.log(key);
      break;

    default:
      console.log(key);
      // alert("Wrong key!");
      break;
  }
}

// !Creating button/keypress (:active) animation
function btnAnimation(currentKey) {
  // !Concatenate the (.) and (currentKey) so we get the class name (.currentKey) pass in (querySelector)
  var activeButton = document.querySelector("." + currentKey);

  // !Add another class on that element for animation
  activeButton.classList.add("pressed");

  // !Set timeout (0.1s) for automatic removing the ("pressed") class on that element
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
