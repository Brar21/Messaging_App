const mongoose=require("mongoose");
const userschema=mongoose.Schema({
    name: String,
  email: String,
  password: String
})
const Usermodel=mongoose.model("user",userschema);
module.exports={Usermodel}