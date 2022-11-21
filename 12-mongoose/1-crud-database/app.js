const mongoose = require("mongoose");

// !CREATE OPERATIONS

// !Connect (mongodb) in your (database) if (testDB) is not exist then it will create automatically
mongoose.connect("mongodb://localhost:27017/testDB");

// !Create new (Schema / Pattern)
const testSchema = new mongoose.Schema({ name: String, rating: Number });

// !Create new (Model / Collections) and passing (testSchema) for (Field and Value)
const TestCollections = mongoose.model("TestCollections", testSchema);

// !CREATE SINGLE (DOCUMENTS / DATABASE)

// !Create / Pass new (Documents / Database) in (Model / TestCollections)
const test1 = new TestCollections({ name: "Test1", rating: 5 });

// !This will save that you passed (Documents / Database)
// !Comment out this code to not insert one (Documents / Database) again
test1.save();

// !CREATE MANY (DOCUMENTS / DATABASE)

const test2 = new TestCollections({ name: "Test2", rating: 3 });
const test3 = new TestCollections({ name: "Test3", rating: 2 });

// !Specify your (Documents / Database) in array
// !Error handler
// !Comment out this code to not insert many (Documents / Database) again
TestCollections.insertMany([test2, test3], function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Succesfully saved all the tests to testDB");
  }
});

// !READ OPERATIONS

// !READ ALL (DOCUMENTS / DATABASE)

// !Error handler
// !Put any name for your (Model / Collections) to get your (Documents / Database)
TestCollections.find(function (err, testcollections) {
  if (err) {
    console.log(err);
  } else {
    console.log(testcollections);

    // !Log all only names from (TestCollections Documents) use (forEach)
    testcollections.forEach(function (tests) {
      console.log(tests.name);
    });

    // !Close our mongodb
    mongoose.connection.close();
  }
});

// !UPDATE OPERATIONS

// !UPDATE SINGLE (DOCUMENTS / DATABASE)

// !1. Specify the name or id (Test2) which one you will update
// !2. Update or Add the (Field and Value)
// !3. Error handler
TestCollections.updateOne(
  { name: "Test2" },
  { review: "This is Test2!" },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Succesfully updated the documents / database.");
    }
  }
);

// !DELETE OPERATIONS

// !DELETE SINGLE (DOCUMENTS / DATABASE)

// !Specify that you want to delete (Documents / Database) that has a (name: "Test2")
// !Error handler
TestCollections.deleteOne({ name: "Test2" }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Succesfully deleted the document");
  }
});
