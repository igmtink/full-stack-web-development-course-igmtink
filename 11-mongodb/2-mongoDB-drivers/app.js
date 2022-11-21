const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db("mongoDBDrivers");
    const drivers = database.collection("drivers");

    const docs = [
      { id: 1, name: "Screw", price: 30, review: "Great Driver!" },
      { id: 2, name: "Flat", price: 50, review: "Awesome Driver!" },
    ];

    await drivers.insertMany(docs);

    const query = { id: 2 };

    const driverName = await drivers.findOne(query);

    console.log(driverName);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
