var express = require('express'); 

const sessioncheck=(req,res,next)=>{
  if(req.session.username==null){  
    res.redirect('/userLogin')
  }else{
    next()
  }
}


const adminSession=(req,res,next)=>{
  if( req.session.admins == null){
    res.redirect('/adminLogin')
  }else{
    next()
  }
}


module.exports={sessioncheck:sessioncheck,adminSession:adminSession}
