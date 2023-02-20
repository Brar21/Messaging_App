const mongoose=require("mongoose");
const connection=mongoose.connect(`mongodb+srv://soniasaini:soniasaini@cluster0.neg6vl9.mongodb.net/socialdb?retryWrites=true&w=majority`)
module.exports={
    connection
}