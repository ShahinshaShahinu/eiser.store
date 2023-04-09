const mongoose = require('mongoose')
mongoose.set('strictQuery',false)

const Address=require('../Mongoose/connecting')

const AddressSchema = new mongoose.Schema({
 

    address: {
       type: Array,
       require: true,
    },

     user:{
      type: String,
      require: true,

     }
     
 
 })
 
 
 const UserAddress = new mongoose.model('UserAddress', AddressSchema)
 
 
 
 
 module.exports = { UserAddress }