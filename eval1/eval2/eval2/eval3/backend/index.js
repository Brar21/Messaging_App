const express=require("express");
const { connection } = require("./config/db");
const { authentication } = require("./middelwares/authentication");
const { PostsRoute } = require("./Routes/postsroutes");
const { UserRouter } = require("./Routes/userroutes");
const cors=require("cors")
const app=express();
app.use(cors({origin:"*"}))
// require("dotenv").config()
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("welcome")
})
app.use("/users",UserRouter)
app.use(authentication)
app.use("/posts",PostsRoute)
app.listen(3300,async()=>{
    try{
await connection
console.log("db connected")
    }catch(err){
        console.log(err)
    }
    console.log("server is running on port 3300")
})
// {"name" :"sonia",
//     "email": "s@gmail.com",
//     "gender": "female",
//     "password": "sonia"}