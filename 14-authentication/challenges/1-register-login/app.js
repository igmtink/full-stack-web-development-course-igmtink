const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin-test:alitabalno17@test.jrbqhgk.mongodb.net/userDB"
);

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

  const newUser = new User({
    name: fullname,
    email: email,
    password: password,
  });

  newUser.save(function (err) {
    if (!err) {
      res.render("secrets");
    } else {
      console.log(err);
    }
  });
});

app.post("/login", function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }, function (err, foundUser) {
    if (!err) {
      if (foundUser) {
        console.log(email);
        console.log(foundUser);
        if (foundUser.password === password) {
          res.render("secrets");
        } else {
          console.log("Incorrect email or password");
        }
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
