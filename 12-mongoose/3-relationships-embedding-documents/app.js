const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB");

// !CREATE RELATIONSHIPS / EMBED (DOCUMENTS / DATABASE)

const fruitSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const Fruits = new mongoose.model("Fruits", fruitSchema);

const pineapple = new Fruits({ name: "Pineapple" });
pineapple.save();

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // !Connect (personSchema) to (Schema / Fruits Pattern) so that our (Schema / Pattern) need only data from (Schema / Fruits Pattern)
  favoriteFruit: fruitSchema,
});

const People = new mongoose.model("People", personSchema);

const john = new People({
  name: "john",
  // !Get the (Documents / Database) from (Model / Fruits Collections)
  favoriteFruit: pineapple,
});
john.save();
