// TODO: FizzBuzz - Advance using while loop
var numArray = [];
var count = 1;

function fizzBuzz() {
  while (count <= 100) {
    if (count % 3 === 0 && count % 5 === 0) {
      numArray.push("FizzBuzz");
    } else if (count % 3 === 0) {
      numArray.push("Fizz");
    } else if (count % 5 === 0) {
      numArray.push("Buzz");
    } else {
      numArray.push(count);
    }

    count++;

    console.log(numArray);
  }
}

fizzBuzz();
