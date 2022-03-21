const mongoose = require('mongoose');

const utbildningModel = {
name: String,
educationLeader: leader.id,
courses: courses.id,
description: String,
};
module.exports = mongoose.model("Education", utbildningModel);