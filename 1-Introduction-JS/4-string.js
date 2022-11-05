// !String Concatenation (Combining Strings)
var stringSample = "My name is" + " " + "Ivan";

// !Getting string count (length)
var name = "Ivan";
name.length;

// !Characters Counter
var limitCharacter = 280;
var characterCount = prompt("Type anything.");

// You need to put inside of (open and close) the math method
alert(
  "You have written " +
    characterCount.length +
    " characters," +
    " you have only " +
    (limitCharacter - characterCount.length) +
    " characters left."
);

// !String Slicing
// It will slice from (0) position to (3) position
var sampleSlicing = "Slice";
sampleSlicing.slice(0, 3);

// !Short hands of (Alert, Prompt, Slice)
alert(prompt("Compose your message:").slice(0, 140));

// !String UpperCase / LowerCase
var sampleStringCase = "Ivan Gregor Tabalno";
sampleStringCase.toUpperCase();
sampleStringCase.toLowerCase();
