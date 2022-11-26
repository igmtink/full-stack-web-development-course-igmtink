const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(
  "mongodb+srv://admin-test:alitabalno17@test.jrbqhgk.mongodb.net/wikiDB"
);

const articleSchema = new mongoose.Schema({ title: String, content: String });

const Article = new mongoose.model("Article", articleSchema);

// !Get Method API
app.get("/articles", function (req, res) {
  Article.find({}, function (err, result) {
    // !Always send a callback to get the status of api in postman
    if (!err) {
      res.send(result);
    } else {
      res.send(err);
    }
  });
});

// !Post Method API
app.post("/articles", function (req, res) {
  const title = req.body.title;
  const content = req.body.content;
  const newArticle = new Article({ title: title, content: content });
  newArticle.save(function (err) {
    // !Always send a callback to get the status of api in postman
    if (!err) {
      res.send("Succesfully added a new article.");
    } else {
      res.send(err);
    }
  });
});

// !Delete Method API
app.delete("/articles", function (req, res) {
  Article.deleteMany({}, function (err) {
    if (!err) {
      console.log("Succesfully deleted all articles.");
    } else {
      res.send(err);
    }
  });
});

// !Request All Articles

// !Shortcut of (get / post / delete)
app
  .route("/articles")
  .get(function (req, res) {
    Article.find({}, function (err, result) {
      // !Always send a callback to get the status of api in postman
      if (!err) {
        res.send(result);
      } else {
        res.send(err);
      }
    });
  })
  .post(function (req, res) {
    const title = req.body.title;
    const content = req.body.content;
    const newArticle = new Article({ title: title, content: content });
    newArticle.save(function (err) {
      // !Always send a callback to get the status of api in postman
      if (!err) {
        res.send("Succesfully added a new article.");
      } else {
        res.send(err);
      }
    });
  })
  .delete(function (req, res) {
    Article.deleteMany({}, function (err) {
      if (!err) {
        console.log("Succesfully deleted all articles.");
      } else {
        res.send(err);
      }
    });
  });

// !Request Specific Article

app
  .route("/articles/:articleTitle")

  // !Get Method Specific Parameters API
  // !Always send a callback to get the status of api in postman
  .get(function (req, res) {
    const articleTitle = req.params.articleTitle;

    Article.findOne({ title: articleTitle }, function (err, foundArticleTitle) {
      if (!err) {
        if (foundArticleTitle) {
          res.send(foundArticleTitle);
        } else {
          res.send("No article matching that title was found.");
        }
      } else {
        res.send(err);
      }
    });
  })

  // !Put Method Specific Parameters API - Put is will overwrite all (Field and Value)
  // !Always send a callback to get the status of api in postman
  .put(function (req, res) {
    const articleTitle = req.params.articleTitle;

    Article.update(
      { title: articleTitle },
      { title: req.body.title, content: req.body.content },
      { overwrite: true },
      function (err) {
        if (!err) {
          res.send("Succesfully updated article.");
        } else {
          res.send(err);
        }
      }
    );
  })

  // !Patch Method Specific Parameters API - Patch is will update only specific (Field and Value)
  // !Always send a callback to get the status of api in postman
  .patch(function (req, res) {
    const articleTitle = req.params.articleTitle;

    // !($set: req.body) this is will update the (Field and Value) according to the user specified the (Field and Value)
    Article.update({ title: articleTitle }, { $set: req.body }, function (err) {
      if (!err) {
        res.send("Succesfully updated article.");
      } else {
        res.send(err);
      }
    });
  })

  // !Delete Method Specific Parameters API
  // !Always send a callback to get the status of api in postman
  .delete(function (req, res) {
    const articleTitle = req.params.articleTitle;

    Article.deleteOne({ title: articleTitle }, function (err) {
      if (!err) {
        res.send("Succesfully deleted article.");
      } else {
        res.send(err);
      }
    });
  });

app.listen(port, function () {
  console.log(`Server is running at port: ${port}`);
});
