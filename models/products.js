const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    author : {
        type : String,
    },
    price : {
        type : Number,
    },
    year : {
        type : String,
    },
    pages : {
        type : Number,
    },
    isbn : {
        type : String,
    },
    remarks : {
        type : String,
    },
    frontPic : {
        type : String,
    },
    backPic : {
        type : String,
    },


 })

 module.exports = mongoose.model('Product', productSchema)