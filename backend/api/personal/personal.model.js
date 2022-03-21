const mongoose = require('mongoose');

const personalModel = {
    fName: String,
    lName: String,
    email: String,
    bKonto: Number,
};
module.exports = mongoose.model("Personal", personalModel);