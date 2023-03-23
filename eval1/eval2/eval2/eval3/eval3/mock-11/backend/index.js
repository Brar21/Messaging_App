const { json } = require("express");
const express=require("express");
const { connection } = require("./Configs/db");
const { userRouter } = require("./Routes/UserRoutes");
const cors=require("cors")
const app=express();
app.use(express.json())
app.use(cors());

app.get("/",(req,res)=>{
    res.send("welcome home")
})
app.use("/",userRouter)
app.listen(3400,async()=>{
    try{
        await connection
        console.log("db is connected")
    }
    catch(err){
        console.log("db connection error")
    }
    console.log("server is running on port 3400")
})