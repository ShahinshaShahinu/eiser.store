
const mongoose = require('mongoose')
mongoose.set('strictQuery',false)

const Category=require('../Mongoose/connecting')




const categorySchema =new mongoose.Schema({

  categoryName:{
      type:String,
      require:true
     },
     SubcategoryName:{
      type:String,
      require:true
     },
    
     Date:{
       type:String,
       require:true,
     },
    
  
  
  })
  
  const  categoryCollection=new mongoose.model('categorydatas',categorySchema)
  
    module.exports= categoryCollection         