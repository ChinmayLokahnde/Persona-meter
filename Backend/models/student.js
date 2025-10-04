const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:String,
    academics:Number,
    discipline:Number,
    etiquette:Number,
    certification:Number,
    leadership:Number,
    helpfulness:Number,
    participation:Number,
    skill:Number,
});

module.exports = mongoose.model("Student", studentSchema);