const mongoose = require('mongoose');

const applyModel = {
    FName: String,
    Lname: String,
    Mail: String,
    Utbildningar: String,

}

module.exports = mongoose.model("ansoka", applyModel)