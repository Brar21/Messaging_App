



const fs=require("fs")
const Recording=(req,res,next)=>{
    const {id}=req.params

if(req.method==="PATCH"){
    const read=fs.readFileSync("../records.txt","utf-8")
const data=fs.appendFileSync("records.txt",`\nThe document with id:${id} has been updated.`)
// res.send("record updated")
console.log(data,"data",req.method,id,read)
next()
}
else if(req.method==="DELETE"){
    const data=fs.appendFileSync("records.txt",`\nThe document with id:${id} has been deleted.`)
// res.send("record deleted")
console.log(data,"data")

    next()

}else{
    res.send("recording")
}
}
module.exports={Recording}