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

// TODO: Capitalise the first letter of their name using only (Slice, Length, String Concatenation)

// Breakdown the problems

// 1. Create a var that stores the name that user enters via prompt.

var sampleName = prompt("What is your name?");

// 2. Capitalise the first letter of their name.

// a. Isolate the first character
var firstChar = sampleName.slice(0, 1);

// b. Turn the first character to upper case
var upperCaseFirstChar = firstChar.toUpperCase();

// c. Isolate the rest of the name and change it to lower case
var restOfNameLowerCase = sampleName.slice(1, sampleName.length).toLowerCase();

// d. Concatenate the first character with the rest of the character
var capitalisedFirstCharName = upperCaseFirstChar + restOfNameLowerCase;

// 3. We use the capitalised version of their name to greet them using alert.
alert("Hello " + capitalisedFirstCharName);
