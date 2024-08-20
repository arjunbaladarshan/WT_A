const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    age: Number
});

module.exports = mongoose.model("Student",schema);