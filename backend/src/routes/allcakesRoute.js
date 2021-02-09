const express = require('express');
const allcakesRouter=express.Router();
const Cakesdata= require("../model/cakesdata")
const CartCakesdata= require("../model/cartcakedata")

const multer= require ('multer');
const cors = require('cors');
const jwt=require('jsonwebtoken')

function router(){

    allcakesRouter.get('/:id',function(req,res){
        const id=req.params.id;
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
        Cakesdata.findById(id)
        .then(function(books){
            res.send(books)
        })
        
    });
   
   




    return allcakesRouter;
}




module.exports = router;