const express=require("express");
const { Recording } = require("../middlewares/reocrded");
const { Validator } = require("../middlewares/validator");
const { Bokkmodel } = require("../models/booksmodel");
const Router=express.Router();
Router.get("/",async(req,res)=>{
    try{
        const {price,genre}=req.query;
       
        if(price==="price_low"){
            const data=await Bokkmodel.find({genre:genre}).sort({price:1})
            console.log(data)

            res.send("books in ascending order according to price")
        }
        else if(price==="price_high"){
            const data=await Bokkmodel.find({genre:genre}).sort({price:-1})
            console.log(data)

res.send("books in descending order according to price")
        }
        else {
            const data =await Bokkmodel.find({genre:genre});
            console.log(data)
            res.send("all book are getting")
        }

    }
    catch(err){

    }
})
Router.post("/create",Validator,async(req,res)=>{
    try{
        const postdata=req.body;
        const data =new Bokkmodel(postdata);
      await  data.save()
      console.log(postdata)
      res.send("posted data")

    }catch(err){
        res.send("post have error")
    }
})
Router.patch("/update/:id",Recording,async(req,res)=>{
    try{
        const patchdata=req.body;
        const {id}=req.params;
        const data =await Bokkmodel.findByIdAndUpdate({_id:id},patchdata)
      
        
      console.log(patchdata)
      res.send("updated data")

    }catch(err){
        res.send("patch have error")
    }
})
Router.delete("/delete/:id",Recording,async(req,res)=>{
    try{
        const {id}=req.params;
        const data =await Bokkmodel.findByIdAndDelete({_id:id})
    //   console.log(postdata)
      res.send("deleted data")

    }catch(err){
        res.send("delete have error")
    }
})
module.exports={Router}