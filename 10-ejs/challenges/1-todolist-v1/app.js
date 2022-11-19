const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
// !Own module
const date = require(__dirname + "/date.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
// !Express use EJS as an View Engine
app.set("view engine", "ejs");

// !List of items
// Const in array can (push) new item but it can't reassign new value
const newItems = [];
const workItems = [];

app.get("/", function (req, res) {
  // !Get the date
  const day = date.getDate();

  // !Passing the value to (html)
  res.render("list", { listTitle: day, newListItems: newItems });
});

app.post("/", function (req, res) {
  let newItem = req.body.newItem;

  // !If button (list) value is equal to ('Work List')
  if (req.body.list === "Work List") {
    workItems.push(newItem);

    // !Whenever we click sumbit button it will redirect to ('/') home route and it will trigger all code in ('/') home route
    res.redirect("/work");
  } else {
    // !Pass the value from newItem (input value) to newItems (array)
    newItems.push(newItem);

    // !Whenever we click sumbit button it will redirect to ('/') home route and it will trigger all code in ('/') home route
    res.redirect("/");
  }
});

// !Reuse (list.ejs) in another route ('/work')
app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.listen(port, function () {
  console.log(`Server running at port: ${port}`);
});
