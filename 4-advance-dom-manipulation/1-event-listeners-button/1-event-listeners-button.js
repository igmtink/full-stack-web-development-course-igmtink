// !Event Listener Button
document.querySelector("button").addEventListener("click", handlerClick); // .addEventListener("event type", function)

function handlerClick() {
  alert("I got clicked!");
}

// !Anonymous function
document.querySelector("button").addEventListener("click", function () {
  alert("I got clicked!");
}); // .addEventListener("event type", function)

// !Adding event listener to all button
var allButtons = document.querySelectorAll("button");
for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", function () {
    alert("Button: " + i + " clicked!");
  });
}

// !(this) keyword
var numberOfDrumsButton = document.querySelectorAll("button");

for (var i = 0; i < numberOfDrumsButton.length; i++) {
  numberOfDrumsButton[i].addEventListener("click", function () {
    // !(this) is getting which element clicked
    console.log(this);

    // !(this.innerHTML) is getting the value/text of that element clicked
    console.log(this.innerHTML);

    // !Styling the element which is clicked
    this.style.color = "white";
  });
}
