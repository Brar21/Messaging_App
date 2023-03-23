const mongoose=require("mongoose");
const bookingschema=mongoose.Schema({
    user : { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    flight : { type: mongoose.Schema.Types.ObjectId, ref: "flight" }
})
const Bookingmodel=mongoose.model("Booking",bookingschema);
module.exports={Bookingmodel}