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
