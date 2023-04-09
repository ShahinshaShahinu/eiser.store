const mongoose=require('mongoose')


mongoose.set('strictQuery',false)
require('dotenv').config()
   
const server= mongoose.connect(process.env.MONGO,{useNewUrlParser:true})