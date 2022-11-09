<!-- !Create a directory and open that working directory -->

```bash
mkdir // project name
cd // project name
```

<!-- !Create your main (javascript) file -->

```bash
touch // name.js
```

<!-- !Create a (package.json) file for your project -->

```bash
npm init // make sure that you already inside your working directory
```

<!-- !Installing express -->

```bash
npm install express // make sure that you already inside your working directory
```

<!-- !Setup our server -->

```javascript
// !Calling express module
const express = require("express");
const app = express();
// !This is our server port, the root our website
const port = 3000;

// !To load our root website
app.get("/", function (request, response) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});
```
