const mongoose = require('mongoose');
const Workout = require('../models/workout.js');
const moment = require('moment');

mongoose.connect('mongodb://localhost/Workout-Tracker', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});



const workoutSeed = [
  {
    date: new Date(new Date().setDate(new Date().getDate() - 9)),
    formatted_date: moment(new Date(new Date().setDate(new Date().getDate() - 9))).format('MMMM Do YYYY'),
    exercises: [
      {
        type: 'resistance',
        name: 'Bicep Curl',
        duration: 20,
        weight: 100,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    date: new Date(new Date().setDate(new Date().getDate() - 8)),
    formatted_date: moment(new Date(new Date().setDate(new Date().getDate() - 8))).format('MMMM Do YYYY'),
    exercises: [
      {
        type: 'resistance',
        name: 'Lateral Pull',
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    date: new Date(new Date().setDate(new Date().getDate() - 7)),
    formatted_date: moment(new Date(new Date().setDate(new Date().getDate() - 7))).format('MMMM Do YYYY'), 
    exercises: [
      {
        type: 'resistance',
        name: 'Push Press',
        duration: 25,
        weight: 185,
        reps: 8,
        sets: 4,
      },
    ],
  },
  {
    date: new Date(new Date().setDate(new Date().getDate() - 6)),
    formatted_date: moment(new Date(new Date().setDate(new Date().getDate() - 6))).format('MMMM Do YYYY'),
    exercises: [
      {
        type: 'cardio',
        name: 'Running',
        duration: 25,
        distance: 4,
      },
    ],
  },
  {
    date: new Date(new Date().setDate(new Date().getDate() - 5)),
    formatted_date: moment(new Date(new Date().setDate(new Date().getDate() - 5))).format('MMMM Do YYYY'),
    exercises: [
      {
        type: 'resistance',
        name: 'Bench Press',
        duration: 20,
        weight: 285,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    date: new Date(new Date().setDate(new Date().getDate() - 4)),
    formatted_date: moment(new Date(new Date().setDate(new Date().getDate() - 4))).format('MMMM Do YYYY'),
    exercises: [
      {
        type: 'resistance',
        name: 'Bench Press',
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    date: new Date(new Date().setDate(new Date().getDate() - 3)),
    formatted_date: moment(new Date(new Date().setDate(new Date().getDate() - 3))).format('MMMM Do YYYY'),
    exercises: [
      {
        type: 'resistance',
        name: 'Quad Press',
        duration: 30,
        weight: 300,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    date: new Date(new Date().setDate(new Date().getDate() - 2)),
    formatted_date: moment(new Date(new Date().setDate(new Date().getDate() - 2))).format('MMMM Do YYYY'),
    exercises: [
      {
        type: 'resistance',
        name: 'Bench Press',
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    date: new Date(new Date().setDate(new Date().getDate() - 1)),
    formatted_date: moment(new Date(new Date().setDate(new Date().getDate() - 1))).format('MMMM Do YYYY'),
    exercises: [
      {
        type: 'resistance',
        name: 'Military Press',
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4,
      },
    ],
  },
];

// deleteMany will remove the workoutSeeds (if they have already been added to the database) before then inserting them to avoid duplicates

Workout.deleteMany({})
  .then(() => Workout.collection.insertMany(workoutSeed)) // Workout.collection is important syntax here to ensure the records are inserted properly
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });