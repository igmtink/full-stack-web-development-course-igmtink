var allButton = document.querySelectorAll(".btn");

for (var i = 0; i < allButton.length; i++) {
  allButton[i].addEventListener("click", function () {
    var innerHTMLBtn = this.innerHTML;

    pressed(innerHTMLBtn);

    // !Passing the key in (btnAnimation) function
    btnAnimation(innerHTMLBtn);
  });
}

document.addEventListener("keydown", function (event) {
  pressed(event.key);

  // !Passing the key in (btnAnimation) function
  btnAnimation(event.key);
});

function pressed(key) {
  switch (key) {
    case "w":
      console.log(key);
      break;

    case "a":
      console.log(key);
      break;

    case "s":
      console.log(key);
      break;

    case "d":
      console.log(key);
      break;

    default:
      console.log(key);
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
