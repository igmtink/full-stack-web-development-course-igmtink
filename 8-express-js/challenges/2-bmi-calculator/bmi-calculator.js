const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  // !The (parseFloat()) function parses a string argument and returns a floating point number
  // You can type string like (1.8meters)
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmiResult = weight / (height * height);

  res.send(`Your BMI is ${bmiResult}`);
});

app.listen(port, function () {
  console.log("Server started at port " + port);
});
