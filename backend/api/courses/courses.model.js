const mongoose = require('mongoose');

const courseModel = {
name: String,
length: Number,
description: String,
};
module.exports = mongoose.model("Course", courseModel);
