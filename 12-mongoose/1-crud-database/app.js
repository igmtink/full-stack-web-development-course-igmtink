const mongoose = require("mongoose");

// !CREATE OPERATIONS

// !Connect (mongodb) in your (database) if (testDB) is not exist then it will create automatically
mongoose.connect("mongodb://localhost:27017/testDB");

// !Create new (Schema / Pattern)
const testSchema = new mongoose.Schema({ name: String, rating: Number });

// !Create new (Model / Collections) and passing (testSchema) for (Field and Value)
const TestCollections = mongoose.model("TestCollections", testSchema);

// !CREATE ONE (DOCUMENTS / DATABASE)

// !Create / Pass new (Documents / Database) in (Model / TestCollections)
const test1 = new TestCollections({ name: "Test1", rating: 5 });

// !This will save that you passed (Documents / Database)
// !Comment out this code to not insert one (Documents / Database) again
test1.save();

// !CREATE MANY (DOCUMENTS / DATABASE)

const test2 = new TestCollections({ name: "Test2", rating: 3 });
const test3 = new TestCollections({ name: "Test3", rating: 2 });

// !Create many (Documents / Database) with (error handler) by (function())
// !Comment out this code to not insert many (Documents / Database) again
TestCollections.insertMany([test2, test3], function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Succesfully saved all the tests to testDB");
  }
});

// !READ OPERATIONS

// !Read all (Documents / Database) from (Model / TestCollections) with (error handler) and the output will be an array object
TestCollections.find(function(err, testcollections) {
  if (err) {
    console.log(err);
  } else {
    console.log(testcollections);

    // !Log all only names from (TestCollections Documents) use (forEach)
    testcollections.forEach(function(tests) {
      console.log(tests.name)
    })
  }
});
