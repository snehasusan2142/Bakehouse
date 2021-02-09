const express = require('express');
const userRouter=express.Router();
const userdata= require("../model/userdata")
const fbdata= require('../model/feedback')
const jwt=require('jsonwebtoken');
const { JsonWebTokenError } = require('jsonwebtoken');
const cors = require('cors');

userRouter.use(cors());
userRouter.use(express.json());
function router(){


    userRouter.post('/feedback',function(req,res){
        console.log("Hey im in feedback")
     res.header("Access-Control-Allow-Origin", "*")
     res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
     console.log("im in post feedback")    
     fbblock=req.body
     var data=fbdata(fbblock);
    data.save();
   })
 
   userRouter.get('/feedback',function(req,res){
    console.log("Hey im in feedback")
 res.header("Access-Control-Allow-Origin", "*")
 res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
 console.log("im in post feedback")    
 fbdata.find()
    .then(function(fbs){
        res.send(fbs)
    })
})

    userRouter.post('/signup',function(req,res){
       
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
        // console.log("im in post user signup")    
        var newuser=req.body
        var msg='';
        userdata.findOne({email: newuser.email})
        .then(user => {
                    if (user) {  
                                console.log('That email already registered' );
                                msg="Email Address is in use. Try again with another e-mail";
                                res.status(200).send({msg})
                            }
                    else {
                            console.log(newuser)
                             var user=userdata(newuser);
                             msg="success"
                            user.save();
                            res.send({msg})
                        }
                    })


      
    });

    userRouter.post('/login',function(req,res){
       
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
        console.log("im in post user login")    
        console.log(req.body)
        var email =req.body.email; var pass = req.body.password; 

        var msg='';
        userdata.findOne({email: email})
        .then(user => {
         if (!user) {  
          console.log('That email is not registered' );
          msg="Email Address is not registered...Please Signup";
          res.status(200).send({msg})
        
            }
         else{
              userdata.findOne({password: pass})
             .then(user => {
              if (!user) {  
                  console.log('Password Not Correct' );
                  msg="Inorrect Password "
                  res.status(200).send({msg})
                 
              }
              else{
                  console.log("sucess--happyshopping!!!")
                  msg="success"
                  let payload={subject:email+pass};
                  let token=jwt.sign(payload,"secretKey")
                  console.log("im in login app.post"+token)
                  res.status(200).send({token,msg});   
  
                     }
  
               })        
            }
         });
    });

    userRouter.post('/adminlogin',function(req,res){
       
      res.header("Access-Control-Allow-Origin", "*")
      res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
      console.log("im in post user login")    
      console.log(req.body)
      var email =req.body.email; var pass = req.body.password; 

      var msg='';
      userdata.findOne({email: email})
      .then(user => {
       if (!user) {  
        console.log('Not Admin' );
        msg="Email Address is not registered..as Admin";
        res.status(200).send({msg})
      
          }
       else{
            userdata.findOne({password: pass})
           .then(user => {
            if (!user) {  
                console.log('Password Not Correct' );
                msg="Inorrect Password"
                res.status(200).send({msg})
               
            }
            else{
                console.log("sucess--happyshopping!!!")
                msg="success"
                const adminemail="admin@gmail.com";
                const adminpass="Admin@123";
                let payload={subject:email+pass};
                let payload_admin={subject:adminemail+adminpass};
                let token=jwt.sign(payload,"secretKey")
                let token_admin=jwt.sign(payload_admin,"secretKey")
                console.log("im in admin login app.post admin token is:::"+token_admin)
                res.status(200).send({token,token_admin,msg});   

                   }

             })        
          }
       });
  });



    return userRouter;
}




module.exports = router;