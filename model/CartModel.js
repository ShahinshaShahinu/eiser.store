const mongoose = require('mongoose')
mongoose.set('strictQuery',false)

const Cart=require('../Mongoose/connecting')

const CartSchema = new mongoose.Schema({


    Products: {
       type: Array,
       require: true
    },
    user: {
       type: String,
       require: true
    }
    
 
 
 })
 
 const UserCartDatas=new mongoose.model('CartData',CartSchema)

 module.exports={UserCartDatas}         