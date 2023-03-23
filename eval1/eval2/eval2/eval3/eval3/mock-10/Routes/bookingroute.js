const express=require("express");
const { Bookingmodel } = require("../Models/Bookingmodel");
const bookroute=express.Router();
bookroute.post("/booking",async(req,res)=>{
    const payload=req.body;
    try{
const b=new Bookingmodel(payload)
await b.save()
res.status(201).send("created booking")
    }catch(err){
        res.status(201).send("created booking")

    }
})
bookroute.get("/dashboard",async(req,res)=>{
   
    
    try{
const b=await Bookingmodel.find().populate(["user","flight"])

res.status(200).send(b)
    }catch(err){
res.status(400).send(err)
    }
})
module.exports={bookroute}
