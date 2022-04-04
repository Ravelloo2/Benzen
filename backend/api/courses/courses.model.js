/*PETRAS*/
const mongoose = require("mongoose");

const courseModel = {
  name: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
  points: {
    type: Number
  },
  location: {
    type: String,
    required: true,
  },
  teacherId: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  }
};
module.exports = mongoose.model("Course", courseModel);
