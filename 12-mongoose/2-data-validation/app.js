const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/dataValDB");

const dataValSchema = new mongoose.Schema({
  // !Required a name with message
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"],
  },
  // !Validate if the rating is between 1 and 5
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
});
