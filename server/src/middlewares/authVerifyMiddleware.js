const jwt = require("jsonwebtoken");


module.exports = (req,res,next)=>{
    let token = req.headers['token'] ;
    jwt.verify(token,"secret123abc",(err,decoded)=>{
        if(err){
            console.log(token);
            return res.status(401).json({status:"unauthorized"});
        }
        else{
            let email = decoded.data;
            console.log(email);
            req.headers.email = email ;
            next();
        }
    })
}