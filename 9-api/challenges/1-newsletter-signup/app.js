const express = require("express");
const app = express();
const port = 3000;

const https = require("https");
const bodyParser = require("body-parser");
const request = require("request");

// !To include static files, like css file
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(`${__dirname}/signup.html`);
});

app.post("/", function (req, res) {
  const apiKey = "727970609c0da8d609e1c5fbb55b6bf0-us21";
  const audienceId = "a4e6dda177";

  // !Input name from html
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  // !Data requirements to post a request
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  // !To turn the data into string that is in format of json
  const jsonData = JSON.stringify(data);

  // !To get a post request on mailchimp, this is provided by documentation
  const url = `https://us21.api.mailchimp.com/3.0/lists/${audienceId}`;
  const options = {
    method: "POST",
    auth: `igmtdev:${apiKey}`,
  };

  // !Get the request from url
  const request = https.request(url, options, function (response) {
    // !Get the data from post request url and it will return an a hexidecimals
    response.on("data", function (data) {
      // !Convert the hexidecimals to json format
      console.log(`Data: ${JSON.parse(data)}`);
    });
  });

  console.log(`Request: ${request}`);

  // !Pass to (jsonData) to (https.request) to send the mailchimp requirements data by calling (request)
  request.write(jsonData);
  request.end();
});

app.listen(port, function () {
  console.log(`Server is running at port: ${port}`);
});
