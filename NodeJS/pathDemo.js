const path = require('path');
const filePath = "D:\\Darshan University\\Data\\BTech\\Sem-3\\WT\\2024\\Codes\\A\\WT_A\\NodeJS\\pathDemo.js";
ans1 = path.dirname(filePath);
ans2 = path.basename(filePath);
ans3 = path.extname(filePath);
console.log("dirname",ans1)
console.log("basename",ans2)
console.log("extname",ans3)