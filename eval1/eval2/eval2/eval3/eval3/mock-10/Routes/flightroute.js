const express=require("express");
const { Flightmodel } = require("../Models/Flightmodel");
const flightRouter=express.Router();
flightRouter.get("/flights",async(req,res)=>{
let query=req.query
    try{
        const flight=await Flightmodel.find(query);
        console.log(flight)
        res.status(200).send(flight)
    }
    catch(err){
        console.log(err);
        res.status(404).send({msg:"something went wrong"})
    }
})
flightRouter.get("/flights/:id",async(req,res)=>{
const {id}=req.params
    try{
        const flight=await Flightmodel.findOne({_id:id});
        console.log(flight)
        res.status(200).send(flight)
    }
    catch(err){
        console.log(err);
        res.status(404).send({msg:"something went wrong"})
    }
})
flightRouter.post("/flights", async (req, res) => {
    const payload = req.body;
    try {
      const create = new Flightmodel(payload);
      await create.save();
      console.log(create,"create")
      res.status(201).send("Created flight");
    } 
    catch (error) {
      console.log(error,"err");
      res.status(201).send("Created flight");
    }
  });
  flightRouter.patch("/flights/:id",async(req,res)=>{
    const {id}=req.params
    const payload=req.body;
    const flight=await Flightmodel.findOne({_id:id});

        try{
            if(!flight){
                return res.send(`flightid ${id} not found`)
            }
            await Flightmodel.findByIdAndUpdate({_id:id},payload)
            console.log(flight)
            res.status(204).send(`flightid ${id} updated`)
        }
        catch(err){
            console.log(err);
            res.status(204).send(`flightid ${id} updated`)

        }
    })
    flightRouter.delete("/flights/:id",async(req,res)=>{
        const {id}=req.params
        
        ;
        const flight=await Flightmodel.findOne({_id:id});
    
            try{
                if(!flight){
                    return res.send(`flightid ${id} not found`)
                }
                await Flightmodel.findByIdAndDelete({_id:id})
                console.log(flight)
                res.status(200).send(`flightid ${id} deleted`)
            }
            catch(err){
                console.log(err);
                res.status(200).send(`flightid ${id} deleted`)

            }
        })
module.exports={flightRouter}