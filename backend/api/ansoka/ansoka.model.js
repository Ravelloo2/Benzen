const mongoose = require('mongoose');

const applyModel = {
    Fname: String,
    Lname: String,
    Mail: String,
    Utbildningar: String,
}

module.exports = mongoose.model("ansoka", applyModel)