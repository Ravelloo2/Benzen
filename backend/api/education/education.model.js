const mongoose = require('mongoose');

const utbildningModel = {
name: String,
educationLeader: String,
courses: String,
description: String,
};
module.exports = mongoose.model("Education", utbildningModel);