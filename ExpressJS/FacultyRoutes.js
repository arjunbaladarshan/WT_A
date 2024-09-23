const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded());

router.get('/first',(req,res)=>{
    res.send('fac 1');
});

router.get('/second',(req,res)=>{
    res.send('fac 2');
});

router.get('/third',(req,res)=>{
    res.send('fac 3');
});

module.exports = router;