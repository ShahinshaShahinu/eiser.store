const mongoose = require('mongoose')
mongoose.set('strictQuery',false)

const OrderOrderModel=require('../Mongoose/connecting')



const OrderSchema = new mongoose.Schema({


    orderduser: {
        type: String,
        require: true
    },
    deliveryAddress: {
        firstname: {
            type: String
        },
        lastname: {
            type: String
        },
        phone: {   
            type: Number
        },
        pincode: {
            type: String,
        },
        useremail: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        district: {
            type: String,
        },
        country: {
            type: String,
        },
        Date: {
            type: String,
        },
       
        paymentid: {
            type: String,
        },

    },
    totalPrice: {
        type: Number,
        require: true,
    },
    Orderproducts: {
        type: Array,
        require: true,
    },
    paymentmethod: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    },
    grandTotal: {
        type: Number,
        require: true,
    },
    orderid: {
        type: String,
    },
    ordereddate: {
        type: String,
        require: true
    },
    deliverydate: {
        type: String,
        require: true
    },
    returnStatus:{
        type:String,
        require:true
    },
    salesDate:{
        type: String,
        require: true
    },
    Delivered:{
        type: String,
        require: true
    }




})

const userordersCollection = new mongoose.model('userorders', OrderSchema)

module.exports = { userordersCollection }

