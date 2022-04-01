const mongoose = require('mongoose');
/*mer data */
const utbildningModel = {
name: String,
educationLeader: String,
length: Number,
place: String,
points: Number,
courses: Array,
description: String,
};
module.exports = mongoose.model("Education", utbildningModel);

