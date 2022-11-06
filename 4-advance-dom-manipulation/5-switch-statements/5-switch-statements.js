// !Creating switch statements, it is like (if - else if - else)
// switch (key) {
//   case value:
//     break;

//   default:
//     break;
// }

var allButtons = document.querySelectorAll("button");

for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", function () {
    var innerHTMLButton = this.innerHTML;

    switch (innerHTMLButton) {
      case "Button 1":
        var tom1 = new Audio("./sounds/tom-1.mp3");
        tom1.play();

        console.log(innerHTMLButton);
        break;

      case "Button 2":
        var tom2 = new Audio("./sounds/tom-2.mp3");
        tom2.play();

        console.log(innerHTMLButton);
        break;

      case "Button 3":
        var tom3 = new Audio("./sounds/tom-3.mp3");
        tom3.play();

        console.log(innerHTMLButton);
        break;

      default:
        console.log(innerHTMLButton);
        break;
    }
  });
}
