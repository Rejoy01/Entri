const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName :{
        type:String,
        required:[true,'Please enter fullname'],
        minlength:[4,"Fullname should have minimum 4 letters"],
        maxlength:[10,"Fullname should not exceed 10 letters"]
    },
    email:{
        type:String,
        required:[true,"please eneter email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"please eneter the password"],

    }
});

module.exports = mongoose.model('User',userSchema)