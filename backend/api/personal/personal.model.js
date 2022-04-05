const mongoose = require('mongoose');

const personalModel = {
    fName: String,
    lName: String,
    email: String,
    bKonto: Number,
    courseName: String,
};
module.exports = mongoose.model("Personal", personalModel);