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
