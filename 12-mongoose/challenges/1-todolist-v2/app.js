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

// !DATABASE

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

// !HOME ROUTE

// !To render our (html) in (browser)
app.get("/", function (req, res) {
  // !Read all (Documents / Field and Value), (find({})) this is returning an array []
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
      res.render("index", { todoList: todoItems, listTitle: date.getDate() });
    }
  });
});

// !CUSTOM ROUTE WITH DATABASE

// !Create (Schema / Pattern) for (custom route)
const listSchema = new mongoose.Schema({
  // !Name of the (custom route)
  name: String,
  // !(Documents / Field and Value) that (Schema / Pattern) of (todolistSchema) in array
  items: [todolistSchema],
});

// !Create (Model / Collections)
const List = new mongoose.model("List", listSchema);

// !To render any (route) using express route parameter (/:custom_parameter)
app.get("/:custom_listName", function (req, res) {
  // !Get our (custom route) name
  const customListName = req.params.custom_listName;

  // !Read single (Documents / Field and Value) in our (Model / Collections) the (custom route) name is already exist, (findOne()) this is returning an (object schema)
  List.findOne({ name: customListName }, function (err, foundList) {
    if (!err) {
      if (!foundList) {
        // !If (custom route) name is not exist on our (Model / Collections) then create a new (Documents / Field and Value)
        const list = new List({
          name: customListName,
          items: todoStart,
        });

        list.save();

        // !After adding a new (custom route) we redirect in our (custom route) to refresh the browser
        res.redirect("/" + customListName);
      } else {
        // !If (custom route) is already exist then render that (html) with a new (Documents / Field and Value) from our new (Model / Collections)
        res.render("index", {
          listTitle: foundList.name,
          todoList: foundList.items,
        });
      }
    }
  });
});

// !SUBMIT HOME ROUTE FORM

// !To submit our data from (html)
app.post("/", function (req, res) {
  // !To get our data from (input tag) in our (html) body
  const todo = req.body.todoInput;

  // !To get our data from (button tag) in our (html) body
  const title = req.body.listTitle;

  // !Create a new (Documents / Field and Value) with passing a data from (input tag) in our (html) body
  const todoDocuments = new Todolist({ name: todo });

  if (title === date.getDate()) {
    // !If the list title is equal to date, we save our (Documents / Field and Value) in our home route (Model / Collections)
    todoDocuments.save();
    res.redirect("/");
  } else {
    // !Else find that listTitle (Documents / Field and Value) in custom route (Model / Collections), this is returing an a (object schema)
    List.findOne({ name: title }, function (err, foundList) {
      // !Add todoDocuments (Documents / Field and Value) in listTitle (Documents / Field Value) which is inside of (foundList object schema)
      foundList.items.push(todoDocuments);
      foundList.save();
      res.redirect("/" + title);
    });
  }
});

// !SUBMIT DELETE ROUTE FORM

// !To submit our delete post method
app.post("/delete", function (req, res) {
  // !To get our value (_id) in (input:check) from (html) body
  const checkedId = req.body.checkedTodo;

  // !To delete a (Documents / Field and Value) by (_id)
  Todolist.findByIdAndRemove(checkedId, function (err) {
    res.redirect("/");
  });
});

app.listen(port, function () {
  console.log(`Server running at port: ${port}`);
});
