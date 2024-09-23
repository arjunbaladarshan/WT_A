const express = require('express');
const app = express();

app.use('/koinenokav',express.static('pdf'));
app.use('/phota',express.static('images'));

app.get('/',(req,res)=>{
    res.send('Home page')
});

app.listen(3000,()=>{
    console.log('Server started 3000');
})