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
    // !To get response code from http request
    console.log(`Status code: ${response.statusCode}`);

    // !Get the data from (url) and it will return an a hexidecimal code
    response.on("data", function (data) {
      // !(JSON.parse()) is converting the hexidecimal code into json format
      const weatherData = JSON.parse(data);
      // !Getting specific data from json format
      // Tips: You can get also the (data path) from json format by clicking the copy path in chrome extension (Json Viewer)
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

      console.log(weatherData);
      console.log(temp);
      console.log(weatherDescription);

      // !Using (res.write) we can send multiple (data / line) on our root website
      res.write(
        `<h1>The temperature in Londin us ${temp} degrees Celcius.</h1>`
      );
      res.write(`<p>The weather is ${weatherDescription}.</p>`);
      res.write(`<image src="${imageURL}" alt="weather icon"></image>`);
      res.send();
    });
  });

  // res.sendFile(__dirname + "/index.html");
});

app.listen(port, function () {
  console.log(`Server is running on port ${port}.`);
});
