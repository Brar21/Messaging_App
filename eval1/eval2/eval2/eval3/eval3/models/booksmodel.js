const mongoose=require("mongoose");
const bookschema=mongoose.Schema({
    title :String,
genre:String,
price:Number,
author:String
})
const Bokkmodel=mongoose.model("book",bookschema);
module.exports={Bokkmodel}