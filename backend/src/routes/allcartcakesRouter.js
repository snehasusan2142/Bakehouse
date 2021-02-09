const express = require('express');
const cartRouter=express.Router();
const CartCakesdata= require("../model/cartcakedata")
const AllCakes=require("../model/cakesdata")
const cors = require('cors');
cartRouter.use(express.json());
function router(){
    cartRouter.post('/',function(req,res){
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
        console.log("hey im in post")
           var cakeorder={cake:req.body.cakes,address:req.body.item}
           var order=CartCakesdata(cakeorder);
        console.log("in post ")
           console.log(order)
           order.save();

           var cakesnew=req.body.cakes;
        
        //    for(var i=0;i<=l;i++){
        //        console.log(cake.quantity)
      
        for(var cake in cakesnew){
            var q=cakesnew[cake].quantity
            // console.log("in cake"+q)
            var st= cakesnew[cake].stock-cakesnew[cake].quantity
            // console.log(st)
            find=cakesnew[cake].name
            AllCakes.findOneAndUpdate( { name: find },  {$set:{stock:st}}, function(err, result) {
                if (err) throw err;
                // console.log(result);
            });
        }});

     return cartRouter;
}

module.exports = router;