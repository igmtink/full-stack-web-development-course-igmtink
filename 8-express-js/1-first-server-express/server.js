// !Calling express module
const express = require("express");
const app = express();
// !This is our server port, the root our website
const port = 3000;

// !To load our root website
app.get("/", function (request, response) {
  response.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});
