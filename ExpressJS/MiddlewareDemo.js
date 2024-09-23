const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));

//middleware
app.use('/admin',(req,res,next)=>{
    console.log("req.path",req.path);
    console.log("req.baseUrl",req.baseUrl);
    console.log("req.originalUrl",req.originalUrl);

    if(req.body.UN=="arjun" && req.body.PW=="bala"){
        next();
    }
    else{
        res.send("Unauthorized");
    }
});

//actual routes

app.get('/admin/first',(req,res)=>{
    res.send("Admin first page");
})
app.get('/admin/second',(req,res)=>{
    res.send("Admin second page");
})
app.get('/student/first',(req,res)=>{
    res.send("Student first page");
})
app.get('/student/second',(req,res)=>{
    res.send("Student Second page");
})


app.listen(process.env.PORT,()=>{
    console.log("servetr started at "+process.env.PORT);
})