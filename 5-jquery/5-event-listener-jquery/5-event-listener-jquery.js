// !Adding (click) event listener in jQuery
$("h1").click(function () {
  console.log("H1 is clicked!");
});

// !Adding (click) event listener to all button in jQuery without using (for loop)
// In vannila javascript
// We are using (for loop)
var allButton = document.querySelectorAll("button");
for (var i = 0; i < allButton.length; i++) {
  allButton[i].addEventListener("click", function () {
    console.log(this.innerHTML);
  });
}

// In jQuery
// ($("button")) it's like (querySelectorAll / querySelector)
// Now we selected all button (element) and (.click(function ())) it's (addEventListener click)
// So all button (element) have now (addEventListener click)
$("button").click(function () {
  console.log(this.innerHTML);
});

// !Adding (keypress) event listener on entire website in jQuery
$(document).keydown(function (event) {
  $("h1").text(event.key);
});

// !Adding (mouseover) event listener in jQuery
// (.on) is also (addEventListener) that you can set specific event type like ("click", "keydown", "mouseover")
$("h1").on("mouseover", function () {
  $("h1").css("color", "red");
});
