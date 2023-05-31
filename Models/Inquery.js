const mongoose = require('mongoose')

const inquerySchema = new mongoose.Schema({
    name:String,
    mobile:Number,
    email:String,
    message:String,
})

module.exports=mongoose.model("Inquery",inquerySchema)