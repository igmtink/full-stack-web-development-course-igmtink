const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// !For parse data that comes from an HTML form
// !Grab the information that gets posted to your server form an HTML form
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  // !(__dirname) is locating our current directory
  res.sendFile(__dirname + "/index.html");
});

// !For posting the data from requested in HTML form
app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  // !Send back the result
  res.send(`The result of the calculation is ${result}`);
});

app.listen(port, function () {
  console.log(`Server started at port ${port}`);
});
