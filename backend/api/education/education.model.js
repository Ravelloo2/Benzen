// Jontes


// Mitt schema som lagras i databasen. jag la till extra info för att satsa på högre betyg :)
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

