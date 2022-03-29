const mongoose = require('mongoose');

const applyModel = {
    Fname: String,
    Lname: String,
    Email: String,
    Utbildningar: String,
}

module.exports = mongoose.model("ansoka", applyModel)