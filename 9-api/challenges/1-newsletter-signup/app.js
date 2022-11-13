const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
const request = require("request");

// !To include static files, like css file
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(`${__dirname}/signup.html`);
});

app.listen(port, function () {
  console.log(`Server is running at port: ${port}`);
});
