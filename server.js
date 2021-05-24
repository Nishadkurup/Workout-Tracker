// Dependencies are used to run the Express server, use Mongoose, log requests in an easy-to-read format, and use the public folder
const path = require('path');
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

// Connects to the MongoDB database depending on the environment
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Workout-Tracker", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}/ \n`);
});