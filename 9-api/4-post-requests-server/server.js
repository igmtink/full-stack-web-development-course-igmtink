const express = require("express");
const app = express();
const port = 3000;

const https = require("https");
const bodyParser = require("body-parser");

// !To get body post request
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  // !Get the value of (input element)
  const query = req.body.cityName;
  const apiKey = "9f5ace52b189a9cbf3cac1b494987d3d";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=${apiKey}`;

  // !Get response from url
  https.get(url, function (response) {
    console.log(`Status code: ${response.statusCode}`);

    // !Get data from that response url
    response.on("data", function (data) {
      // !Convert hexidecimals data to json
      const weatherData = JSON.parse(data);

      // !Get specific data from (weatherData) json
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageUrl = `https://openweathermap.org/img/wn${icon}@2x.png`;

      res.write(`<p>The weather is currently ${weatherDescription}</p>`);
      res.write(
        `<p>The temperature in ${req.body.cityName} is ${temp} degrees celcius.</p>`
      );
      res.write(`<img src=${imageUrl}>`);
      res.send();
    });
  });

  console.log("Post request recieved.");
});

app.listen(port, function () {
  console.log(`Server is running on port ${port}.`);
});
