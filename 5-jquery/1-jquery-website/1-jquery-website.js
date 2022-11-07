// !Shortening code using jQuery
// document.querySelector("h1").style.color = "red";
$("h1").css("color", "#0769ad");

// !Checking if our (jQuery) is ready, if the (script line) is inside (head tag) not in under (body tag)
$(document).ready(function () {
  $("h1").css("color", "#0769ad");
});

// !(querySelector) in (jQuery) selecting single element/selecting many elements
// document.querySelector(".class-name");
// document.querySelectorAll("button");
$("h1");
$(".class-name");
$("#id");

// !Manipulating (css) in (jQuery)
$("h1").css("color", "#0769ad");
$("h1").css("font-size", "4rem");

// !Manipulating (css) in (jQuery)
$("h1").css("color", "#0769ad");
$("h1").css("font-size", "4rem");

// !Manipulating (textContent) in (jQuery)
$("h1").text("Good Bye!");

// !Manipulating (innerHTML) in (jQuery)
// This is like manipulating (textContent / element value) that included (element tag) inside (button element)
$("button").html("<em>CLICK ME</em>");

// !Adding/Removing another class in (jQuery)
$("h1").addClass("class-name");
$("h1").removeClass("class-name");

// !Adding multiple class in (jQuery)
$("h1").addClass("class-name another-class");

// !Checking if that element has a (specific class) in (jQuery)
$("h1").hasClass("class-name");

// !Getting element (attributes) in jQUery
$("a").attr("href");

// !Setting value of element (attributes) in jQuery
$("a").attr("href", "https://jquery.com/");

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

// !Adding / Removing elements in jQuery
// Adding (element) before the (main element)
// (before element) (h1 element)
$("h1").before("<button>Before</button>");

// Adding (element) after the (main element)
// (h1 element) (after element)
$("h1").after("<button>After</button>");

// Adding (element) before the (content) of (main element)
// This is inside of (main element)
// (prepend element (h1 element))
$("h1").prepend("<button>Prepend</button>");

// Adding (element) after the (content) of (main element)
// This is inside of (main element)
// ((h1 element) append element)
$("h1").append("<button>Append</button>");

// !Adding hide / show animation using toggle on elements in jQuery
// Hide
$("button").on("click", function () {
  $("h1").hide();
});

// Show
$("button").on("click", function () {
  $("h1").show();
});

// Hide / show
$("button").on("click", function () {
  $("h1").toggle();
});

// !Adding fade out / fade in animation using toggle on elements in jQuery
// Fade out
$("button").on("click", function () {
  $("h1").fadeOut();
});

// Fade in
$("button").on("click", function () {
  $("h1").fadeIn();
});

// Fade out / in
$("button").on("click", function () {
  $("h1").fadeToggle();
});

// !Adding collapsing animation on elements in jQuery
// Collapsing Up
$("button").on("click", function () {
  $("h1").slideUp();
});

// Collapsing Down
$("button").on("click", function () {
  $("h1").slideDown();
});

// Collapsing up / down
$("button").on("click", function () {
  $("h1").slideToggle();
});

// !Adding custom animation on elements in jQuery
$("button").on("click", function () {
  $("h1").animate({ opacity: 0.5 });
});

// !Chaining all animation on elements in jQuery
$("button").on("click", function () {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});
