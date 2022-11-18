const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", function (req, res) {
  // !Date module
  const today = new Date();

  // !(getDay) getting monday to sunday by returning number (0 = sunday & 6 = saturday)
  if (today.getDay() === 6 || today.getDay() === 0) {
    res.send(`Yay it's weekend!`);
  } else {
    res.send(`It's weekdays.`);
  }
});

app.listen(port, function () {
  console.log(`Server running at port: ${port}`);
});
