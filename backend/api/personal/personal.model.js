const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PersonalSchema = new Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model("PersonalModel", PersonalSchema);