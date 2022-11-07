// !(querySelector) in (jQuery) selecting single element/selecting many elements
// document.querySelector(".class-name");
// document.querySelectorAll("button");
$("h1");
$(".class-name");
$("#id");

// !Adding/Removing another class in (jQuery)
$("h1").addClass("class-name");
$("h1").removeClass("class-name");

// !Adding multiple class in (jQuery)
$("h1").addClass("class-name another-class");

// !Checking if that element has a (specific class) in (jQuery)
// Returning output (true/false)
$("h1").hasClass("class-name");
