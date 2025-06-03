const http = require("http");


const server = http.createServer((req, res) =>{
    // res.end("Well come to todo App")

    if(req.url === "/todos" && req.method === "GET"){
        res.send("All Todos")
    } else if (req.url === "/todos/create-todo" && req.method === "POST") {
        res.send("Todo created") 
    } else{
        res.send("Route Not found !")
    }
})


server.listen(5000, '127.0.0.1', ()=> {
   console.log("server listening to port 5000 ");
   
})