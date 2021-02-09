const express = require('express');
const adminRouter=express.Router();
const http = require('http').createServer(express);
const CartCakesdata= require("../model/cartcakedata")
const Cakesdata=require("../model/cakesdata")
const userdata =require("../model/userdata")
const multer= require ('multer');
const cors = require('cors');
var nodemailer = require('nodemailer');
const jwt=require('jsonwebtoken')
adminRouter.use(cors());
adminRouter.use(express.json());



function router(){
    adminRouter.get('/customers',function(req,res){
     res.header("Access-Control-Allow-Origin", "*")
     res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
     
     userdata.find()
        .then(function(users){
            res.send(users)
        })
    })

    adminRouter.delete('/customers/:id',function(req,res){
     res.header("Access-Control-Allow-Origin", "*")
     res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
     userdata.findByIdAndDelete(req.params.id,(error)=>{
        console.log(error);
    })
    })
    adminRouter.delete('/customers/order/:id',function(req,res){
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
        CartCakesdata.findByIdAndDelete(req.params.id,(error)=>{
            console.log(error);
        })
       })


    adminRouter.get('/orders',function(req,res){
       
           res.header("Access-Control-Allow-Origin", "*")
           res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
           CartCakesdata.find()
           .then(function(cakes){
               res.send(cakes)
           })
          //  console.log("im in watch st1")
          //  CartCakesdata.watch().on('change', data => console.log("im in watch st2"+new Date(), data));
       });

      adminRouter.post('/customers/order/:id',function(req,res){
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
        id=req.params.id;
        var y
        
      CartCakesdata.findOne({'_id':id},function(err, result) {
        if (err) throw err;
         
         var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'abakehouse21@gmail.com',
              pass: 'Admin@123'
            }
          });
          
          var mailOptions = {
            from: 'abakehouse21@gmail.com',
            to:result.address[1],
            subject: 'Order Shipped',
            text: 'Hello customer, \nExpected delivery on next day itself! \nThis is a system generated mail.Dont reply\n\n \nGreetings from bakehouse team'
          };
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });


      });
    
  });
    
    
        
       adminRouter.post('/addcake',function(req,res){
       
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")

        console.log("im in post cake")
console.log(req.body)
        var admincake=req.body.item
        var newcake=Cakesdata(admincake);
        console.log(newcake)
        newcake.save();
    });
    adminRouter.put('/home/updatecake/:id',function(req,res){
       
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
        let id = req.params.id;
    console.log(req.body)
    console.log("im in put")
    Cakesdata.findByIdAndUpdate(req.params.id,req.body.item, {}, (error)=>{
        console.log(error);
    })
    
    });

    adminRouter.delete('/home/updatecake/:id',function(req,res){
       
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
        let id = req.params.id;
    console.log(req.body)
    console.log("im in delete")
    Cakesdata.findByIdAndDelete(req.params.id,(error)=>{
        console.log(error);
    })
    
    });


    return adminRouter;
}




module.exports = router;