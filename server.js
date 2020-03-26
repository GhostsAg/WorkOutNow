const express = require("express");
const mongoose = require("mongoose");
const Workout = require("./models");
const workoutSeed = require("./seeders/seed");

const PORT = process.env.PORT || 8080

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require("./routes/api_routes"));
app.use(require("./routes/html_routes"));

// Workout.deleteMany({})
//   .then(() => Workout.collection.insertMany(workoutSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
// });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
