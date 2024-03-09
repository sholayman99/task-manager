const userModel = require("../models/userModel");
const otpModel = require("../models/otpModel");
const jwt = require("jsonwebtoken");
const emailSend = require("../helpers/emailHelper");

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

exports.verifyEmail = async (req,res)=>{
    let email = req.params['email'];
    let code = Math.round(Math.floor(100000 + Math.random() * 900000 ));
    try {
       let count = await userModel.aggregate([
           {$match:{email:email}},{$count:"total"}
       ]);
       if(count.length === 1){
         let data =  await otpModel.create({email:email,otp:code});
         await emailSend(email,"Otp Verification" , `Your Otp Verification Code Is : ${code}`);
         res.status(200).json({status:'success',data:data});
       }
       else {
           res.status(403).json({status:'fail',data:"No user found!"});
       }
    }
    catch (e){
        res.status(400).json({status:'fail',data:e.message});
    }
}

exports.verifyOtp = async (req,res)=>{
    let email = req.params['email'];
    let otp = req.params['otp'];
    let status = 0;
    let updatedStatus = 1;

   try {
       let count = await otpModel.aggregate([
           {$match:{email:email,otp:otp}}
       ]);
       if(count.length === 1){
           let data = await otpModel.updateOne(
               {email:email,otp:otp,status:status},
               {email:email,otp:otp,status:updatedStatus});
           res.status(200).json({status:'success',data:data});
       } else {
           res.status(200).json({status: "fail", data: "Invalid OTP Code"})
       }
   }
   catch (e) {
       res.status(200).json({status: "fail", data:e})
   }
}

exports.createPassword = async (req,res)=>{
    let email = req.body['email'];
    let password = req.body['password'];
    let otp = req.body['otp'];
    let updatedStatus = 1;
    try {
       let count = await otpModel.aggregate([
           {$match: {email:email,otp:otp,status:updatedStatus}},{$count:"total"}
       ]);
       if(count.length === 1){
           await  otpModel.updateOne({email:email,otp:otp,status:updatedStatus},{status:0,otp:"0"})
           let data = await userModel.updateOne({email:email},{password:password});
           res.status(200).json({status:"success",data:data});

       }
       else{
           res.status(403).json({status:"fail",data:"Failed to update"});
       }
    }
    catch (e) {
        res.status(400).json({status:"fail",data:"Something went wrong!"});
    }
}