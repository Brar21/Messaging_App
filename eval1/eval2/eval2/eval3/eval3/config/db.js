const mongoose=require("mongoose");
const conection=mongoose.connect("mongodb+srv://soniasaini:soniasaini@cluster0.neg6vl9.mongodb.net/booksdb?retryWrites=true&w=majority")
module.exports={conection}