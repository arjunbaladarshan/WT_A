const mongoose = require('mongoose');

const schema = mongoose.Schema({
    FacultyID:Number,
    FacultyName:String    
});

module.exports = mongoose.model("Faculty",schema,"sahabo");