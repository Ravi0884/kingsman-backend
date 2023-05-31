const mongoose = require('mongoose')

const webSchema = new mongoose.Schema({
    name:String,
    mobile:Number,
    email:String,
    duration:String,
    message:String,
    catageroy:{
        type:String,
        default:"Digital Maketing"
    }
})

module.exports=mongoose.model("WebDevelopment",webSchema)