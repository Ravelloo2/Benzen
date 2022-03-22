const mongoose = require('mongoose');

const utbildningModel = {
name: String,
educationLeader: String,
courses: Array,
description: String,
};
module.exports = mongoose.model("Education", utbildningModel);