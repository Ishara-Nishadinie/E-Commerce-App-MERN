const jwt = require('jsonwebtoken');

exports.requiresignin=(req, res, next)=>{
    if(req.headers.authorization){
        //jwt decode
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
    }else{
        return res.status(400).json({message: "Authorization Required"})    
    }

    next();
  }

exports.usermiddleware =(req,res, next)=>{
    if(req.user.role !== "user"){
        return res.status(400).json({message: "User Access Denied"})
    }
    next();
}

exports.adminmiddleware = (req, res, next)=>{
    if(req.user.role !== "admin"){
        return res.status(400).json({message: "Admin Access Denied"})
    }
    next();
}