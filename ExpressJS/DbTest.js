const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Student = require('./Student');
const Faculty = require('./Faculty');

require('dotenv').config();

const connectionString = "mongodb+srv://"+process.env.DBUSER+":"+process.env.DBPASS+"@cluster0.ys0my.mongodb.net/classDB";
mongoose.connect(connectionString).then(()=>{
    console.log("Connected with CloudDB");

    const app = express();
    app.use(bodyParser.urlencoded());
    
    app.get('/home',(req,res)=>{
        res.send("Welcome");
    });

    app.get('/faculties',async (req,res)=>{
        const ans = await Faculty.find();
        res.send(ans);
    })

    //GetAll
    app.get('/students',async (req,res)=>{
        const ans = await Student.find();
        res.send(ans);
    });

    //GetByID
    app.get('/students/:id',async (req,res)=>{
        const ans = await Student.findOne({id:req.params.id});
        res.send(ans);
    });

    //Create
    app.post('/students',async (req,res)=>{
        stu = new Student({...req.body});
        const ans = await stu.save();
        res.send(ans);
    });

    //Delete
    app.delete('/students/:id',async (req,res)=>{
        const ans = await Student.deleteOne({id:req.params.id});
        res.send(ans);
    });

    //Update
    app.patch('/students/:id',async (req,res)=>{
        const stu = await Student.findOne({id:req.params.id});
        stu.name = req.body.name;
        const ans = await stu.save();
        res.send(ans);
    });

    app.get('/students/search/:text',async (req,res)=>{
        const ans = await Student.find({
            name:{
                $regex:req.params.text
            }
        });
        res.send(ans);
    })



    app.listen(process.env.PORT,()=>{
        console.log("server started @ "+process.env.PORT);
    })
});


