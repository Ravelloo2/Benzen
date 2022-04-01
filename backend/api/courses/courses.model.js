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
  location: {
    type: String,
    required: true,
  },
  teacherId: {
    type: String,
  },
  startDate: {
    type: Date,
  }
};
module.exports = mongoose.model("Course", courseModel);
