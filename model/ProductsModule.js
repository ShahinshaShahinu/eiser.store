const mongoose = require('mongoose')
mongoose.set('strictQuery',false)

const product=require('../Mongoose/connecting')

const Productchema = new mongoose.Schema({
    ProductName: {
        type: String,
        require: true
    },
    ProductPrice: {
        type: Number,
        require: true
    },
    ProductImage: {
        type: [],
        require: true
    },
    stocks: {
        type: Number,
        require: true
    },
    ProductCategory: {
        type: String,
        require: true
    },
    ProductDescription: {
        type: String,
        require: true,
    },
    Productid: {
        type: String,
        require: true
    },
    Date: {
        type: String,
        require: true,
    },
    status: {
        type: Boolean,
        require: true
    },
    OutOfStocks:{
        type: String,
        require: true,
    }


})

const ProductCollection = new mongoose.model('products', Productchema)

module.exports = { ProductCollection }

