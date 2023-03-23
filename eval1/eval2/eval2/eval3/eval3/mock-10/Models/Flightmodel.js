const mongoose=require("mongoose");
const flightschema=mongoose.Schema({
    airline: String,
    flightNo: String,
    departure: String,
    arrival: String,
    departureTime: Date,
    arrivalTime: Date,
    seats: Number,
    price: Number
})
const Flightmodel=mongoose.model("flight",flightschema);
module.exports={Flightmodel}