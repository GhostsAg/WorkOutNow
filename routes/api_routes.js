const router = require("express").Router();
const db = require("../models");
let aggregate;

router.post("/api/workouts", ({ body }, res) => {
  aggregate = 0;
  db.Workout.create({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.get("/api/workouts/", (req, res) => {
  db.Workout.find({})
  .sort({ date: -1 })
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.put("/api/workouts/:id", (req, res) => {
  aggregate += req.body.duration;
  db.Workout.findOneAndUpdate({ _id: req.params.id },
    {
      $push: {exercises: req.body}, totalDuration: aggregate 
  }, {new: true})
  .then( dbUpdate => {
    console.log(dbUpdate);
    res.send(dbUpdate);
  });
});

module.exports = router;
