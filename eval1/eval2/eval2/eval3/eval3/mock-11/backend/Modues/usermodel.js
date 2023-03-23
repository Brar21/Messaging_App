const mongoose=require("mongoose");
const userschema=mongoose.Schema({
    name : {type: String, required: true},
    bio:{type:String},
    phone:{type:String},
    url:{type:String},
    email : {type: String, required: true},
    password : {type: String, required: true}, 
})
const Usermodel=mongoose.model("user",userschema);
module.exports={Usermodel}