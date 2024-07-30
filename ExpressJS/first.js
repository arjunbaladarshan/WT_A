const express = require('express');
const path = require('path')

const app = express();

app.all('/home',(req,res,next)=>{
    res.write("This is the response for all methods");
    next();
});

app.get('/home',(req,res)=>{
    res.write('Hello world using get method');
    res.end();
});

app.post('/home',(req,res)=>{
    res.send('Hello world using post method');
});

app.put('/home',(req,res)=>{
    res.send('Hello world using put method')
})



app.listen(3000,()=>{
    console.log("Server started @ 3000");
})