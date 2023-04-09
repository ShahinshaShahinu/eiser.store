const mongoose=require('mongoose')

mongoose.set('strictQuery',false)

const Login=require('../Mongoose/connecting')

const LoginSchema = new mongoose.Schema({
   username: {
      type: String,
      require: true,

   },
   email: {
      type: String,
      require: true,

   },
   password: {
      type: String,
      require: true,

   },
   name: {
      type: String,
      require: true,
   },
   status: {
      type: Boolean,
      require: true
   },
   userId: {
      type: String,
      require: true
   },
   usedCoupon: {
      type: Array,
      require: true
   },
   wallet:{
      type:Number,
      require:true
   },

})


const userCollection = new mongoose.model('userdata', LoginSchema)




module.exports = { userCollection }