const http = require("http");


const server = http.createServer((req, res) =>{
    console.log({req, res});
    res.end("Well come to todo App")
})


server.listen(5000, '127.0.0.1', ()=> {
   console.log("server listening to port 5000 ");
   
})