// !Adding event listener in keyboard
// !(document.addEventListener) to add event listener entire of website not in specific element like (button)
// !(function (event/e)) to pass the (key event) inside function so we can get the value which (key event) we press in keyboard
document.addEventListener("keydown", function (event) {
  console.log(event);
});

// !Callback Event Listener
function sampleEventListener(typeOfEvent, callback) {
  var eventThatHappened = {
    eventType: "keydown",
    key: "p",
    durationOfKeydown: 2,
  };

  // !If (eventType) is equal to (typeOfEvent) trigger this statement
  if (eventThatHappened.eventType === typeOfEvent) {
    // !Pass this (object) in outside function (function (e))
    callback(eventThatHappened);
  }
}

sampleEventListener("keydown", function (e) {
  console.log(e);
});
