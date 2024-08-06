const express = require('express');
const app = express();

const students = ['arjun','bala','rajkot','gujarat','INDIA'];

// getAllStudent
app.get('/student',(req,res)=>{
    res.send(students);
});

//getByID
app.get('/student/:index',(req,res)=>{
    res.send(students[req.params.index]);
});

app.post('/student/:name',(req,res)=>{
    students.push(req.params.name);
    res.send("Student added");
});

app.patch('/student/:index/:newname',(req,res)=>{
    const {index,newname} = req.params;
    students[index] = newname;
    res.send("Student Edited");
});

app.delete('/student/:index',(req,res)=>{
    students.splice(req.params.index,1);
    res.send("Student Deleted");
});


app.listen(3000,()=>{
    console.log("Server started @ 3000");
})