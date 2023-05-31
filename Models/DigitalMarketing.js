const mongoose = require('mongoose')

const digitalSchema = new mongoose.Schema({
    name:String,
    mobile:Number,
    email:String,
    message:String,
    catageroy:{
        type:String,
    }
})

module.exports=mongoose.model("DigitalMarketing",digitalSchema)