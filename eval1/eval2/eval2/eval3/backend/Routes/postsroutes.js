const express=require("express");
const { JsonWebTokenError } = require("jsonwebtoken");
const { PostModel } = require("../Models/Postmodel");
// const { UserModel } = require("../Models/usermodel");
const PostsRoute=express.Router();
PostsRoute.get("/",async(req,res)=>{
    try{
const {device1,device2,device}=req.query;
if(device){
    const posts=await PostModel.find({device:device});
    res.send(JSON.stringify(posts))
}else if(device1&&device2){
    const posts=await PostModel.find({$or:[{device:device1},{device:device2}]})
    res.send(JSON.stringify(posts))
}
    }
    catch(err){
        console.log(err)
        res.send("get have error")
    }
})
PostsRoute.post("/create",async(req,res)=>{
    const payload=req.body;
    payload.userid=req.body.userid;
    
    try{
const posts=new PostModel(payload);
await posts.save();
res.send("created post")
    }
    catch(err){
        console.log(err)
        res.send("get have error")
    }
})
PostsRoute.patch("/update/:id",async(req,res)=>{
    const userid=req.body.userid;
    const id=req.params.id;
    const update=req.body;
    try{
const posts=await PostModel.find({_id:id})
console.log(posts)
if(userid!==posts[0].userid){
    res.send("not authorized");
}else{
    await PostModel.findByIdAndUpdate({_id:id},update)
    res.send("posts updated")
}
    }
    catch(err){
        console.log(err)
        res.send("patch have error")
    }
})
PostsRoute.delete("/delete/:id",async(req,res)=>{
    const userid=req.body.userid;
    const id=req.params.id;

    try{
const posts=await PostModel.findOne({_id:id});
if(userid!==posts.userid){
    res.send("Not authorized")
}else{
    await PostModel.findByIdAndDelete({_id:id})
    res.send("post deleted")
}
    }
    catch(err){
        console.log(err)
        res.send("delete have error")
    }
})
module.exports={PostsRoute}