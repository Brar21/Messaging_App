const express=require("express");
const morgan=require("morgan");
const fs=require("fs")
const app=express();
app.use(morgan(function(tokens,req,res){
    const [x,y,z]=[tokens.method(res,res),tokens.url(req,res),tokens.user-agent(req,res)];
    const logs=fs.appendFileSync("./logs.text",`\n ${x} ${y} ${z}`)
}))
module.exports=morgan
