const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

exports.registration = async (req,res)=>{
   try {
       let reqBody = req.body;
       let data = await userModel.create(reqBody);
       return res.status(201).json({status:"success",data:data});
   }
   catch (e) {
       return res.status(400).json({status:"fail",data:e});
   }
};

exports.login = async (req,res)=>{
    try {
        let reqBody = req.body;
        let matchStage ={$match:reqBody};
        let projectStage ={$project:{
            "email":1,"password":1,"mobile":1,"firstName":1,"lastName":1,"photo":1
            }};
        let result = await userModel.aggregate([
            matchStage,projectStage
        ]);
        if(result.length === 1){
          let payload = {exp: Math.floor(Date.now() / 1000) + (24*60 * 60),data:result[0]['email']};
          let token = jwt.sign(payload,'secret123abc');
          return res.status(200).json({status:"success",token:token,data:result[0]});
        }
        else{
            return res.status(401).json({status:"fail",message:"unauthorized"});
        }

    }
    catch (e) {
        return res.status(400).json({status:"fail",data:e});
    }
};

exports.profileUpdate = async (req,res) =>{
    try {
      let email = req.headers['email'];
      let reqBody = req.body;
      let data = await userModel.updateOne({email:email},reqBody)
      return res.status(200).json({status:"success",data:data});
    }
    catch (e) {
      return res.status(400).json({status:"fail",data:e});
    }
}

exports.profileDetails = async (req,res)=>{
    try {
       let email = req.headers['email'];
       let matchStage ={$match:{email:email}};
       let projectStage ={$project: {
               _id:1, email:1,password: 1,photo:1,firstName: 1,lastName: 1,mobile: 1
           }};
       let data = await userModel.aggregate([matchStage,projectStage]);
        return res.status(200).json({status:"success",data:data});
    }
    catch (e) {
        return res.status(400).json({status:"fail",data:e});
    }
}