// !Environment Variables
require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// !Passport Authentication
const session = require("express-session");
const passport = require("passport");
// const LocalStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");

mongoose.connect(process.env.MONGOOSE_SERVER);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

// !Express Session
app.use(
  session({
    secret: "thisoursecrets.",
    resave: false,
    saveUninitialized: false,
  })
);

// !Passport
app.use(passport.initialize());
app.use(passport.session());

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
});

// !Passport Local Mongoose
// To hash and salt out password and to save into our mongodb database
userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema);

// !Use static authenticate method of model in LocalStrategy
passport.use(User.createStrategy());

// !Use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/signup", function (req, res) {
  res.render("signup");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/secrets", function (req, res) {
  // !If the user is authenticated / login then render the secrets page

  if (req.isAuthenticated()) {
    res.render("secrets");
  } else {
    res.redirect("/login");
  }
});

app.get("/logout", function (req, res) {
  // !Logout method by passport
  req.logout(function (err) {
    if (err) {
      console.log(err);
    }
    res.redirect("/");
  });
});

app.post("/signup", function (req, res) {
  const fullname = req.body.fullname;
  const email = req.body.username;
  const password = req.body.password;

  // !Register new user with passport & mongodb
  User.register(
    { name: fullname, username: email },
    password,
    function (err, user) {
      if (err) {
        // !If there's an error go back into signup page
        console.log(err);
        res.redirect("/signup");
      } else {
        // !Send a cookie to the browser so the user will be authenticated
        // !If there's no error authenticate it and redirect to secrets page
        passport.authenticate("local")(req, res, function () {
          res.redirect("/secrets");
        });
      }
    }
  );
});

app.post("/login", function (req, res) {
  // !Check the DB to see if the username that was used to login exists in the DB
  User.findOne({ username: req.body.username }, function (err, foundUser) {
    // !If username is found in the database, create an object called "user" that will store the username and password
    // !That was used to login
    if (foundUser) {
      const user = new User({
        username: req.body.username,
        password: req.body.password,
      });

      // !Use the "user" object that was just created to check against the username and password in the database
      // !In this case below, "user" will either return a "false" boolean value if it doesn't match, or it will
      // !Return the user found in the database
      passport.authenticate("local", function (err, user) {
        if (err) {
          console.log(err);
        } else {
          // !This is the "user" returned from the passport.authenticate callback, which will be either
          // !A false boolean value if no it didn't match the username and password or the user that was found, which would make it a truthy statement
          if (user) {
            // !If true, then log the user in, else redirect to login page
            req.login(user, function (err) {
              res.redirect("/secrets");
            });
          } else {
            res.redirect("/login");
          }
        }
      })(req, res);

      // If no username is found at all, redirect to login page.
    } else {
      // !User does not exists
      res.redirect("/login");
    }
  });
});

app.listen(port, function () {
  console.log(`Server is running at port: ${port}`);
});
