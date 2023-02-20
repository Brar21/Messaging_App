const express=require("express");
const { UserModel } = require("../Models/usermodel");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt")
const UserRouter=express.Router()
UserRouter.post("/register",async(req,res)=>{

const {email,password,name,gender}=req.body;
const email_p=await UserModel.find({email});
if(email_p?.email){
    res.send("email already exist")
}else{
    try{
        bcrypt.hash(password,8,async(err,hash)=>{
            const user=new UserModel({email,password:hash,name,gender});
            await user.save();
            res.send("registered")
        })
}
catch(err){
    console.log(err)
    res.send("registeration failed")
}
}
})
UserRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;

    try{
    let user=await UserModel.find({email});
    if(user.length>0){
        const hash_pass=user[0].password;
        bcrypt.compare(password,hash_pass,function(err,result){
if(result){
    const token=jwt.sign({userid:user[0]._id},"social");
res.send({msg:"login successfully",token:token})
}
        })
    }
    }catch(err){
        console.log(err)
        res.send("login failed")
    }
    })
    module.exports={
        UserRouter
    }