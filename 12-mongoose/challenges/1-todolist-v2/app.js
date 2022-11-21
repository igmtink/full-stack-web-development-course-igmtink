const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost:27017/todolistDB');

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(port, function () {
  console.log(`Server running at port: ${port}`);
});
