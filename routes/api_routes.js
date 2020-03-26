const router = require("express").Router();
const Workout = require("../models");
let aggregate = 0;

// router.post("/api/workout", ({ body }, res) => {
//   Workout.create(body)
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

router.post("/api/workouts", ({ body }, res) => {
  // const workout = new Workout(body)
  console.log("body", body);
  // let aggregate += body.
  // Workout.insertMany(body)
  //   .then(dbWorkout => {
  //     res.json(dbWorkout);
  //   })
  //   .catch(err => {
  //     res.status(400).json(err);
  //   });
});

router.get("/api/workouts/", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {

  Workout.collection.findOneAndUpdate({
    _id: req.params.id
  }, { $push: {exercise: req.body},
  totalDuration: aggregate
 })
  .then( dbUpdate => {
    console.log(dbUpdate);
    res.send(dbUpdate);
  })
  
  // /updateOne({
  //   exercises: req.body
  // });
});

module.exports = router;
