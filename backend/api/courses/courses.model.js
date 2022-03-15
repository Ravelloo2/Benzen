import mongoose from 'mongoose';

const courseModel = new Schema({
name: String,
teacherID: mongoose.ObjectId,
length: Number,
description: String
});

module.exports = mongoose.model("Course", schema);