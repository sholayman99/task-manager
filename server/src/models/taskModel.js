const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    title:{type:String},
    description:{type:String},
    status:{type:String},
    email:{type:String}
},
    {timestamps:true,versionKey:false});

const taskModel = mongoose.model("tasks" , dataSchema);
module.exports = taskModel;