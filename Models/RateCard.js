const mongoose = require('mongoose')

const rateSchema = new mongoose.Schema({
    name:String,
    mobile:Number,
    email:String,
    purpose:String,
})

module.exports=mongoose.model("RateCard",rateSchema)