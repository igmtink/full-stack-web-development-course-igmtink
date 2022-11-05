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
