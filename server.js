const http = require("http");
const fs = require("fs");
const path = require("path"); 
  
const filepath = path.join(__dirname, "./db/todo.json");

const server = http.createServer((req, res) =>{
    // res.end("Well come to todo App")

    if(req.url === "/todos" && req.method === "GET"){
     
        const data = fs.readFileSync(filepath, {encoding: 'utf-8'})
        res.writeHead(201, {
            "content-type" : "application/json",
           
        })
        res.end(data);


    } else if (req.url === "/todos/create-todo" && req.method === "POST") {
     
        let data = ""

        req.on("data", (chank)=>{
            data = data + chank ;
        })

        req.on("end", ()=>{
            console.log(data);
            
            const {title, body} = JSON.parse(data);
            console.log({title, body});

            const createdAt = new Date().toLocaleString()
            const allTodos = fs.readFileSync(filepath, {encoding: "utf-8"})

            const parseAllTodos = JSON.parse(allTodos);

            parseAllTodos.push({title, body, createdAt})
            fs.writeFileSync(filepath, JSON.stringify(parseAllTodos, null, 2), {encoding: "utf-8"})

        res.end(JSON.stringify({title, body, createdAt}, null, 2)) 

        })
            

    } else{
        res.end("Route Not found !")
    }
})


server.listen(5000, '127.0.0.1', ()=> {
   console.log("server listening to port 5000 ");
   
})