const Validator=(req,res,next)=>{
    const {title,genre,price,author}=req.body;
if(typeof title==="string"&&typeof genre==="string"&&typeof price==="number"&&typeof author==="string"){
    if(title!==""&&genre!==""&&price!==""&&author!==""){
        // res.send("validator success")
        next()
    }}else{
        res.send( "All the fields are not there")
    }
}
module.exports={Validator}