const router = require('express').Router();
const mongojs = require("mongojs");
const Workout = require("../models/workout.js");

// For the initial creation of a workout

router.post("/workouts", ({ body }, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.status(200).json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
        console.log(err)
    });
  });
  
// To see all workouts

router.get("/workouts", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.status(200).json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
        console.log(err)
      });
});

// Workouts that are displayed in the user's dashboard (last seven workouts)

router.get("/workouts/range", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.status(200).json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
        console.log(err)
      });
});

// Retrieving a particular workout by ID

router.get("/workouts/:id", (req, res) => {
    Workout.findOne({ _id: mongojs.ObjectId(req.params.id) })
      .then(dbWorkout => {
        res.status(200).json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
        console.log(err)
      });
});

// Updating a workout with exercises

router.put("/workouts/:id", (req, res) => {
    Workout.findOneAndUpdate({ _id: mongojs.ObjectId(req.params.id) },
        { $push: { exercises: req.body} },
        { new: true })
      .then(dbWorkout => {
        res.status(200).json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
        console.log(err)
      });
});

module.exports = router;
