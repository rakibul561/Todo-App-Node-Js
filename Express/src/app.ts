import express, { Application, Request, Response } from 'express'
const app:Application = express()
import fs from 'fs';
import path from 'path'
const filepath = path.join(__dirname ,"../express/db/todo.json");


 
// get new todos
app.get('/', (req:Request, res: Response) => {
  res.send('wellcome to Todos App !!!')
})
// get all todos
app.get('/todos', (req:Request, res: Response) => {

    const data = fs.readFileSync(filepath, {encoding: 'utf-8'})
       
  res.send(data)
})
app.post('/todos/create-todo', (req:Request, res: Response) => {
  res.send('Hello World!')
})



export default app;