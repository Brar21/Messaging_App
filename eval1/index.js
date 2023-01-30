const http=require("http");
const fs=require("fs");
const cowsay=require("cowsay")
const dns=require("dns")
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.setHeader("Content-type","text/html");
        res.end("<h1>WELCOME TO EMPLOYEE MANAGEMENT SYSTEM </h1>")
    }
    else if(req.url==="/writeinfile"){
fs.writeFile("employee.txt","Employee names are as follows:",(err)=>{
if(err){
    console.log("something went wrong this file")
    res.end("error")
}else{
    console.log("your added successfully")
    res.end("<h1>Data has been written in the file <h1>")
}
})
    }
    else if(req.url==="/enternames"){
       let [w,y,z,a,b]=["Aman", "Albert", "Varun", "Rajat", "Nrupul"];
       fs.appendFile("./employee.txt",`\n ${w} \n ${y}  \n ${z}  \n ${a}  \n ${b} \n`,(err,data)=>{
        if(err){
            res.end(err)
        }else{
            res.end("<h1>All the names added in the file </h1>")
        }
       }) 
    }
    else if(req.url==="/alldetails"){
        const x=cowsay.say({text:fs.readFileSync("employee.txt",{encoding:"utf-8"}),
    e:"oo"})
    res.end(x)
    }
    else if(req.url==="/address"){
        const hostname="masaischool.com"
        dns.lookup(hostname,(err,address,family)=>{
            if(err){
                console.log("")
                res.end(err)
            }
            else{
                res.end(`The IP Address is 'ip address of passed website' ${address}`)
            }
        })
    }
    else if(req.url==="/delete"){
        fs.unlink("./employee.txt",(err)=>{
            if(err){
                res.end(err)
            }else{
                res.end("<h1>File has been deleted</h1>")
            }
        })
    }
})
server.listen(4700,()=>{
    console.log("server is running in 4700 port")
})