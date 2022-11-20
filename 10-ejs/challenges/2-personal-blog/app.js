const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
// !To control string
const _ = require("lodash");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

const greetings = "Hello, I'm an indie app developer based in Philippines!";

app.get("/", function (req, res) {
  // !Render homepage with greetings
  res.render("home", { greet: greetings });
});

app.get("/works", function (req, res) {
  res.render("works");
});

const status = [];

app.get("/blog", function (req, res) {
  res.render("blog", { status: status });
});

app.get("/compose", function (req, res) {
  res.render("compose");
});

app.post("/compose", function (req, res) {
  let post = {
    title: req.body.postTitle,
    description: req.body.postDescription,
  };

  status.push(post);

  // !Passing the from (/compose) to (/blog)
  res.redirect("/blog");
});

app.get("/post/:topic", function (req, res) {
  // !Using (lodash) we can control our string this is will convert the capitalize into lowercase and also it will ignore the symbol like hypen or space (-, )
  const requestTitle = _.lowerCase(req.params.topic);

  // !For loop to check if the url title is in post title array
  status.forEach(function (post) {
    const storedTitle = _.lowerCase(post.title);

    // !If post title is equal to url title then render new page according to the (title)
    if (requestTitle === storedTitle) {
      res.render("post", {
        postTitle: post.title,
        postDescription: post.description,
      });
    }
  });
});

app.listen(port, function () {
  console.log(`Server is running at port: ${port}`);
});
