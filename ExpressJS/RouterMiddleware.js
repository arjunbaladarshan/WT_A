const express = require('express');
const routerStudent = require('./StudentRoutes');
const routerFaculty = require('./FacultyRoutes');
const app = express();


app.use('/student',routerStudent);
app.use('/faculty',routerFaculty);



app.listen(3000,()=>{
    console.log('Server started @ 3000');
})