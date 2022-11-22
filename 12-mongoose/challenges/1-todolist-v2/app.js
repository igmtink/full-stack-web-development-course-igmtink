const express = require("express");
const app = express();
const port = 3000;

// !To get the value from (body)
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// !To connect on our database from (mongodb)
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/todolistDB");

// !To import our own (module) from (data.js)
const date = require(__dirname + "/date.js");

// !To set our default (html) file from (views) folder
app.set("view engine", "ejs");

// !To set our default (static) file from (public) folder
app.use(express.static("public"));

// !Create (Schema / Pattern)
const todolistSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

// !Create (Model / Collections)
const Todolist = new mongoose.model("Todolist", todolistSchema);

// !Create default items (Documents / Field and Value)
const todoStart1 = new Todolist({ name: "Welcome to your todolist!" });
const todoStart2 = new Todolist({
  name: "Hit the + button to add a new items.",
});
const todoStart3 = new Todolist({ name: "<-- Hit this to delete an item." });

// !Insert our default items in (array)
const todoStart = [todoStart1, todoStart2, todoStart3];

// !To render our (html) in (browser)
app.get("/", function (req, res) {
  // !Read all (Documents / Field and Value)
  Todolist.find({}, function (err, todoItems) {
    // !Check if our (Model / Collections) doesn't have any (Documents / Field and Value)
    if (todoItems.length === 0) {
      // !If our (Model / Collections) is empty, we insert our default items from (todoStart) array
      Todolist.insertMany(todoStart, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log(`Succesfully saved ${todoStart.length} documents.`);
        }
      });

      // !After inserting our default items, we redirect in our (app.get) to render and refresh our page
      res.redirect("/");
    } else {
      // !If our (Model / COllections) is not empty, then we render our (html) with passing all (Documents / Field and Value) from (Model / Collections) and it return an array
      res.render("index", { todoList: todoItems, today: date.getDate() });
    }
  });
});

// !To submit our data from (html)
app.post("/", function (req, res) {
  // !To get our data from (input tag) in our (html) body
  const todo = req.body.todoInput;

  // !Create a new (Documents / Field and Value) with passing a data from (input tag) in our (html) body
  const todoDocuments = new Todolist({ name: todo });
  todoDocuments.save();

  // !After creating a new (Documents / Field and Value) we redirect in (app.get) to render our (html) that have a new (Documents / Field and Value)
  res.redirect("/");
});

app.listen(port, function () {
  console.log(`Server running at port: ${port}`);
});
