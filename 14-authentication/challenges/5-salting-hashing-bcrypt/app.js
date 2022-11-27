// !Environment Variables
require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// !Salting password
const bcrypt = require("bcrypt");
const saltRounds = 10;

mongoose.connect(process.env.MONGOOSE_SERVER);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/signup", function (req, res) {
  res.render("signup");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.post("/signup", function (req, res) {
  const fullname = req.body.fullname;
  const email = req.body.email;
  const password = req.body.password;

  // !Salting and Hashing
  bcrypt.hash(password, saltRounds, function (err, hash) {
    const newUser = new User({
      name: fullname,
      email: email,
      password: hash,
    });

    newUser.save(function (err) {
      if (!err) {
        res.render("secrets");
      } else {
        console.log(err);
      }
    });
  });
});

app.post("/login", function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }, function (err, foundUser) {
    if (!err) {
      if (foundUser) {
        // !Comparing user password from salted and hashed password
        bcrypt.compare(password, foundUser.password, function (err, result) {
          if (result === true) {
            res.render("secrets");
          } else {
            console.log("Incorrect email or password");
          }
        });
      } else {
        console.log("Incorrect email or password");
      }
    } else {
      console.log(err);
    }
  });
});

app.listen(port, function () {
  console.log(`Server is running at port: ${port}`);
});
