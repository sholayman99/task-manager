const taskModel = require("../models/taskModel");


exports.createTask = async (req,res)=>{
   try {
       let reqBody = req.body;
       reqBody.email =  req.headers['email'];
       let data = await taskModel.create(reqBody);
       return res.status(201).json({status:"success",data:data});
   }
   catch (e) {
       return res.status(400).json({status:"fail",data:e});
   }
};

exports.deleteTask = async (req,res)=> {
    try {
        let id = req.params.id;
        let data = await taskModel.deleteOne({_id:id});
        return res.status(200).json({status:"success",data:data});
    }
    catch (e) {
        return res.status(400).json({status:"fail",data:e});
    }
};

exports.updateTask = async (req,res)=> {
    try {
        let id = req.params['id'];
        let status =  req.params['status'];
        let data = await taskModel.updateOne({_id:id},{status:status});
        return res.status(200).json({status:"success",data:data});
    }
    catch (e) {
        return res.status(400).json({status:"fail",data:e});
    }
};

exports.listByTaskName = async (req,res)=>{
    try {
        let email = req.headers['email'];
        let status = req.params['status'];
        let matchStage = {$match:{email:email,status:status}};
        let projectStage={$project:{
            "title":1,"description":1,"status":1, "createdDate":{
                $dateToString:{
                    date:"$createdAt",
                    format:"%d-%m-%Y"
                }
                }
            }};
        let data = await taskModel.aggregate([matchStage, projectStage]);
        return res.status(200).json({status:"success",data:data});
    }
    catch (e) {
        return res.status(400).json({status:"fail",data:e});
    }
};

exports.taskStatusCount = async (req,res)=>{
    try {
        let email = req.headers['email'];
        let matchStage ={$match: {email:email}};
        let groupStage = {$group:{
            _id:"$status",sum:{$count:{}}
            }};
        let data = await taskModel.aggregate([matchStage,groupStage])
        return res.status(200).json({status:"success",data:data});
    }
    catch (e) {
        return res.status(400).json({status:"fail",data:e});
    }
}