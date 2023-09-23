const mongoose=require('mongoose')


mongoose.set('strictQuery',false)
require('dotenv').config()
   
const server = mongoose.connect(
  "mongodb+srv://muhammedshahinsha2442:shahinu123@cluster0.zwxzxre.mongodb.net/shopping",
  { useNewUrlParser: true }
);