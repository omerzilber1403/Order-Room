const mongoose = require("mongoose");

const ClassSchema = mongoose.Schema({
    palge: String,
    location: String,
    Dedication: [String],
    ClassType: String,
    Status: Boolean,
    Capacity: Number,
    NumberOfComputers: Number,
    MacronInTheClassroom: Boolean,
    ClassroomErasableBoard: Boolean,
    ClassroomScreen: Boolean,
    Remarks: [String],
});

const Class = mongoose.model("Class", ClassSchema);

module.exports = Class;
