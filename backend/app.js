const express = require('express');
const app= new express();
const Cakesdata=require('./src/model/cakesdata')
const port = 3000;
const cors = require('cors');
app.use(cors());
const allcakesRouter= require('./src/routes/allcakesRoute')(app);
const allcartRouter= require('./src/routes/allcartcakesRouter')(app);
const adminRouter= require('./src/routes/adminRouter')(app);
const userRouter=require('./src/routes/userRouter')(app)
app.use(express.urlencoded({extended:true}))
app.use(express.static(require('path').join(__dirname,'/public')));
app.use('/cakes',allcakesRouter);
app.use('/cart',allcartRouter);
app.use('/admin',adminRouter);
app.use('/user',userRouter);

app.get('/',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
  
    Cakesdata.find()
    .then(function(cakes){
        res.send(cakes)
    })
});


app.listen(port,()=>{
    console.log("Server ready at port:"+port);
});
