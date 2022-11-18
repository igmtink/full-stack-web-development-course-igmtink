const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
// !Express use EJS as an View Engine
app.set("view engine", "ejs");

// !List of items
let newItems = [];

app.get("/", function (req, res) {
  // !Get the date
  const today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-US", options);

  // !Passing the value to (html)
  res.render("list", { kindOfDay: day, newListItems: newItems });
});

app.post("/", function (req, res) {
  let newItem = req.body.newItem;

  // !Pass the value from newItem (input value) to newItems (array)
  newItems.push(newItem);

  // !Whenever we click sumbit button it will redirect to ('/') home route and it will trigger all code in ('/') home route
  res.redirect("/");
});

app.listen(port, function () {
  console.log(`Server running at port: ${port}`);
});
