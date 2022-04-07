// Jontes
const mongoose = require('mongoose');
const utbildningModel = {
name: String,
educationLeader: String,
length: String,
place: String,
points: String,
courses: Array,
description: String,
};
module.exports = mongoose.model("Education", utbildningModel);

