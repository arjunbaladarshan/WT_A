const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());

const students = [
    {
        id:1083,
        name:'devansh',
        email:'kemche@darshan.ac.in',
        age:26
    },
    {
        id:1291,
        name:'deep',
        email:'majama@darshan.ac.in',
        age:62
    }
];

//getAllX
app.get('/students',(req,res)=>{
    res.send(students);
})

//getXByID
app.get('/students/:id',(req,res)=>{
    const ans = students.find(stu=>stu.id==req.params.id);
    res.send(ans);
});

//Create
app.post('/students',(req,res)=>{
    students.push(req.body);
    res.send("Student added");
});

app.patch('/students/:id',(req,res)=>{
    const idToEdit = students.findIndex((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });
    students[idToEdit] = req.body;
    res.send("student updated");
});

app.delete('/students/:id',(req,res)=>{
    const idToEdit = students.findIndex((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });
    students.splice(idToEdit,1);
    res.send("Student deleted");
});

app.get('/students/search/:text',(req,res)=>{
    const ans = students.filter((stu)=>{
        if(stu.name.indexOf(req.params.text)>-1 || stu.email.indexOf(req.params.text)>-1){
            return true;
        }
    });
    res.send(ans);
});

app.get('/students/:from/:to',(req,res)=>{
    const {from,to} = req.params;
    const ans = students.filter((stu)=>{
        if(stu.age>=from && stu.age<=to){
            return true;
        }
    });
    res.send(ans);
})



app.listen(3000,()=>{
    console.log("Server started at 3000");
})