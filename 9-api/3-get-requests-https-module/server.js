const express = require("express");
const app = express();
const port = 3000;

// !Calling https module
const https = require("https");

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=9f5ace52b189a9cbf3cac1b494987d3d";

  // !Https get request from (url)
  // !Get response from (url)
  https.get(url, function (response) {
    console.log(response);
  });

  res.send();
  // res.sendFile(__dirname + "/index.html");
});

app.listen(port, function () {
  console.log(`Server is running on port ${port}.`);
});
