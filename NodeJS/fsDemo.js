const fs = require('fs');


// fs.exists('first.js',(data)=>{
// 	console.log(data);
// });

// fs.stat('first.js',(err,data)=>{
// 	console.log(data);
// });

// fs.readFile('first.js',(err,data)=>{
// 	console.log(data.toString());
// });

// fs.appendFile('second.js',' arjun bala',(err,data)=>{

// });

// fs.readFile('fsDemo.js',(err,data)=>{
// 	fs.writeFile('fsDemoCopy.js',data,(err,data)=>{})
// })

// data = fs.readFileSync('first.js');
// console.log(data);

fs.unlink('first.txt',()=>{
	console.log('File Deleted');
})

console.log("Bye Bye");