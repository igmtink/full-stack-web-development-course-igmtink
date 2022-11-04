// !Basic Aritmetic
var add = 1 + 2; // Addition
var minus = 1 - 2; // Substraction
var multiply = 1 * 2; // Multiplication
var divide = 1 / 2; // Division

// !Modulo Operator
var remainder = 1 % 2; // Returns the remainder (Remaining Numbers)

// !Even
var evenNumber = 46 % 2; // If the remainder is 0 it means it's even number

// !Odd
var oddNumber = 45 % 2; // If the remainder is not 0 it means it's odd number

// !PEMDAS
// Parentheses, Exponents, Multiplication, Division, Addition, Substraction

// First we use addition before multiplication, because it have a (parentheses)
var pemdas = (3 + 5) * 2;

// TODO: PEMDAS FORMULA
var dogAge = prompt("What is your dog age?");
var humanAge = (dogAge - 2) * 4 + 21;
alert("Your dog is " + humanAge + " years old in human years.");

// !Increment and Decrement Expressions
var sampleIncrementandDecrement = 5;
sampleIncrementandDecrement += 2; // 7
sampleIncrementandDecrement++; // Adding 1
