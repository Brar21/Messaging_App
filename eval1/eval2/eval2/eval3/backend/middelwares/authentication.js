const jwt=require("jsonwebtoken");
const authentication=(req,res,next)=>{
    const token=req.headers.authorization;
    if(token){
        const decode=jwt.verify(token,"social")
        if(decode){
            const userid=decode.userid;
            req.body.userid=userid;
            console.log(userid)
            next()
        }else{
            res.send("please login first")
        }
    }else{
        res.send("login again")
    }
}
module.exports={
    authentication
}