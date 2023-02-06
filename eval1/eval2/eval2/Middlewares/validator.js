const validator=(req,res,next)=>{
    let password=req.query.password;
    let role=req.query.role
if(req.method==="PATCH"||"DELETE"){
    if(Number(password)===7877){
        if(role==="admin"||role==="teacher"){
            next()
        }
        else{
            res.send("You are not authorised to do this operation") 
        }
    }
}else{
    res.send("You are not authorised to do this operation")
}
}
module.exports=validator