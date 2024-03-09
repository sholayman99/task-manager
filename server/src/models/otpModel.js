const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
        email:{type:String },
        otp:{type:String,default:"0"},
        status:{type:Number , default:0},
    },
    {timestamps:true,versionKey:false});

const otpModel = mongoose.model("otps" , dataSchema);
module.exports = otpModel;