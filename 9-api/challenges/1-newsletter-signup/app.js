const express = require("express");
const app = express();
const port = 3000;

const mailchimp = require("@mailchimp/mailchimp_marketing");
const https = require("https");
const bodyParser = require("body-parser");
const request = require("request");

// !To include static files, like css file
app.use(express.static("public"));
// !To get value of (form input) in html
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(`${__dirname}/signup.html`);
});

const apiKey = "727970609c0da8d609e1c5fbb55b6bf0-us21";
const audienceId = "a4e6dda177";
const mailchimp_server = "us21";

// !Setting up MailChimp
mailchimp.setConfig({
  apiKey: apiKey,
  server: mailchimp_server,
});

app.post("/", function (req, res) {
  // !Input name from html
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  // !Creating an object with the users data
  const subscribingUser = {
    firstName: firstName,
    lastName: lastName,
    email: email,
  };

  // !Uploading all data in mailchimp
  async function run() {
    // Try/Catch method
    // !Success
    try {
      const response = await mailchimp.lists.addListMember(audienceId, {
        email_address: subscribingUser.email,
        status: "subscribed",
        merge_fields: {
          FNAME: subscribingUser.firstName,
          LNAME: subscribingUser.lastName,
        },
      });

      res.sendFile(`${__dirname}/success.html`);

      // !Catching error
    } catch (e) {
      res.sendFile(`${__dirname}/failure.html`);
    }
  }

  run();
});

app.listen(port, function () {
  console.log(`Server is running at port: ${port}`);
});
