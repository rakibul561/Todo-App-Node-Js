const http = require("http");
const fs = require("fs");
const path = require("path"); 
const { title } = require("process");
  
const filepath = path.join(__dirname, "./db/todo.json");

const server = http.createServer((req, res) =>{

    const url = new URL(req.url, `http://${req.headers.host}`);
const pathName = url.pathname;
// console.log(pathName);

    console.log(url.pathname);
    
    // res.end("Well come to todo App")

    if(req.url === "/todos" && req.method === "GET"){
     
        const data = fs.readFileSync(filepath, {encoding: 'utf-8'})
        res.writeHead(201, {
            "content-type" : "application/json",
           
        })
        res.end(data);


    } else if (pathName === "/todos/create-todo" && req.method === "POST") {
     
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
            

    } 
    else 
    if(pathName ==="/todo" && req.method === "GET"){
        const title = url.searchParams.get("title")
        console.log(title);
         const data = fs.readFileSync(filepath, {encoding: 'utf-8'})
        const parseData = JSON.parse(data)
        const todo = parseData.find((todo)=> todo.title === title)
        const sitringifyTodo = JSON.stringify(todo)
     
        res.writeHead(201, {
            "content-type" : "application/json",
           
        })
        res.end(sitringifyTodo);


    }
    else if (pathName === "/todos/update-todo" && req.method === "PATCH") {
        const title = url.searchParams.get("title")
        
        let data = ""

        req.on("data", (chank)=>{
            data = data + chank ;
        })

        req.on("end", ()=>{
            console.log(data);
            
            const { body} = JSON.parse(data);
           
            const allTodos = fs.readFileSync(filepath, {encoding: "utf-8"})
            const parseAllTodos = JSON.parse(allTodos);

            const todoIndex = parseAllTodos.findIndex((todo) => todo.title === title)
            parseAllTodos[todoIndex].body = body ;
            

         
            fs.writeFileSync(filepath, JSON.stringify(parseAllTodos, null, 2), {encoding: "utf-8"})

        res.end(JSON.stringify({title, body, createdAt: parseAllTodos[todoIndex].createdAt}, null, 2)) 

        })
            

    } 
    
else if (pathName === "/todos/delete-todo" && req.method === "DELETE") {
    const title = url.searchParams.get("title");

    if (!title) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ error: "Title query parameter is required" }));
    }

    const allTodos = fs.readFileSync(filepath, { encoding: "utf-8" });
    const parseAllTodos = JSON.parse(allTodos);

    const filteredTodos = parseAllTodos.filter((todo) => todo.title !== title);

    if (filteredTodos.length === parseAllTodos.length) {
        res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ error: "Todo not found" }));
    }

    fs.writeFileSync(filepath, JSON.stringify(filteredTodos, null, 2), { encoding: "utf-8" });

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: `Todo with title '${title}' deleted successfully` }));
}

    

    else{
        res.end("Route Not found !")
    }
})


server.listen(5000, '127.0.0.1', ()=> {
   console.log("server listening to port 5000 ");
   
})