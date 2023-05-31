const mongoose = require('mongoose')

const ecommerceSchema = new mongoose.Schema({
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

module.exports=mongoose.model("Ecommerce",ecommerceSchema)