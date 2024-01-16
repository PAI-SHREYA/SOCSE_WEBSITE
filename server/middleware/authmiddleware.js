const jwt = require("jsonwebtoken");
const authMiddleware=(req,res,next)=>{
    const token=req.header('Authorization');
    if(!token){
        return res
        .status(401)
        .json({message:"Unauthorized HTTP,token not provided"});
    }
    console.log('token form middleware',token);
    next();
};