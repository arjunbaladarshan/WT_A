const express = require('express');
const router = express.Router();


router.get('/first',(req,res)=>{
    res.send('stu 1');
});

router.get('/second',(req,res)=>{
    res.send('stu 2');
});

router.get('/third',(req,res)=>{
    res.send('stu 3');
});

module.exports = router;