// !Creating object
var sampleObject = {
  name: "Ivan",
  age: 22,
  businessPermit: true,
  hobbies: ["Games", "Guitar", "Anime"],
  work: "Software Engineering",
  greet: function () {
    alert("Hello World!");
  },
};

// !Getting value from object
sampleObject.name;
sampleObject.greet(); // Calling the function (method) inside of object

// !Creating constructor function, this is like creating an (object) that you can set many new (object)
function SampleConstructorFunction(
  name,
  age,
  businessPermit,
  hobbies,
  work,
  greet
) {
  // !(this.name) is like creating new variable/object and setting a value
  this.name = name;
  this.age = age;
  this.businessPermit = businessPermit;
  this.hobbies = hobbies;
  this.work = work;
  this.greet = function () {
    alert("Hello World!");
  };
}

// !Setting constructor function
var sampleConstructorFunction1 = new SampleConstructorFunction(
  "Ivan",
  22,
  true,
  ["Games", "Guitar", "Anime"],
  "Software Engineering"
);

var sampleConstructorFunction2 = new SampleConstructorFunction(
  "Christine",
  22,
  true,
  ["Wattpad", "Facebook", "Tiktok"],
  "Business Assistant"
);

// !Getting value from contructor function
sampleConstructorFunction1.name;
sampleConstructorFunction1.greet(); // Calling the function (method) inside of contructor function

sampleConstructorFunction2.name;
sampleConstructorFunction2.greet(); // Calling the function (method) inside of contructor function
