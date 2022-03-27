const mongoose = require("mongoose");

const courseModel = {
  name: {
    type: String,
    unique: true,
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
};
module.exports = mongoose.model("Course", courseModel);
