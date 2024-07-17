const url = require('url');

path = "https://nodejs.org/docs/latest/api/os.html?page=2&file=abc&name=arjun";

q = url.parse(path,true);

console.log(q.query.page);