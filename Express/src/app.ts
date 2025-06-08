import express, { Application, Request, Response } from 'express'
const app:Application = express()
import fs from 'fs';
import path from 'path'


app.use(express.json());


const filepath = path.join(__dirname ,"../db/todo.json");
 
// get new todos
app.get('/', (req:Request, res: Response) => {
  res.send('wellcome to  Todos App  f!!!')
})
// get all todos
app.get('/todos/:title', (req:Request, res: Response) => {
     console.log("from querys",req.query);
     console.log("from params",req.params);
     
    const data = fs.readFileSync(filepath, {encoding: 'utf-8'});
    // console.log(data);
    
       
  res.json(data)
})
app.post('/todos/create-todo', (req:Request, res: Response) => {
  const {title, body} = req.body ;
  console.log(title, body);
  
  res.send('Hello World!')
})



export default app;