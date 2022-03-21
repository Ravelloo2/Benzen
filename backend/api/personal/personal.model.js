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
    },
    email: {
        type: String,
        required: true
    },
    bKonto: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model("PersonalModel", PersonalSchema);