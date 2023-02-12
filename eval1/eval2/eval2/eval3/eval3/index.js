const { Router } = require("./routes/booksroute");
const express=require("express");
const { conection } = require("./config/db");
require("dotenv").config();
const app=express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.end("welcome")
})
app.use("/book",Router)
app.listen(3100 , async()=>{
    try{
        await conection
        console.log("db is connected")
        console.log("server is running on port"+ process.env.Port)

    }
    catch(err){
        console.log(err)
        console.log("server is failed")
    }
})