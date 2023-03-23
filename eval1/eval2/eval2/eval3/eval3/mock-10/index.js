const express=require("express");
const { connection } = require("./configs/db");
const { bookroute } = require("./Routes/bookingroute");
const { flightRouter } = require("./Routes/flightroute");
const { userRouter } = require("./Routes/userroute");
const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("welcome home")
})
app.use("/",userRouter)
app.use("/",flightRouter)
app.use("/",bookroute)
app.listen("3400",async()=>{
    try{
        await connection
        console.log("connect to db")
    }
    catch(err){
        console.log("unable to connnect to database")
    }
    console.log("server is running on port 3400")
})
// {
//     "name":"sonia",
//     "email":"soniasaini@gmail.com",
//     "password":"12345"
//   }