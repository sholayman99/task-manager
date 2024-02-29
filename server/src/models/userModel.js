const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
        email:{type:String,unique:true},
        password:{type:String},
        mobile:{type:String},
        firstName:{type:String},
        lastName:{type:String},
        photo:{type:String}
    },
    {timestamps:true,versionKey:false});

const userModel = mongoose.model("users" , dataSchema);
module.exports = userModel;