const mongoose = require('mongoose');


//DB Schema
const userSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectID,
    firstName: {
        type: String,
        lowercase: true,
        trim:true,
    },
    lastName: {
        type: String,
        lowercase: true,
        trim:true,
    },
    password: {
        type: String
    },
    username: {
       type: String,
        unique:true,
        lowercase: true,
        trim:true,
    },
    data: mongoose.Mixed
});
//Compile schema to a model
var User = mongoose.model('user', userSchema, 'user');
module.exports = User ;