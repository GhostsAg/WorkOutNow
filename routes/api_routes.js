const router = require("express").Router();
const Workout = require("../models");
let aggregate;

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
  aggregate = 0;
  Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
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
  console.log(req.body);
  Workout.collection.findOneAndUpdate({ _id: req.params.id },
    {
      $push: {exercises: req.body} 
  }, {new: true})
  .then( dbUpdate => {
    console.log(dbUpdate);
    res.send(dbUpdate);
  });
});

module.exports = router;
