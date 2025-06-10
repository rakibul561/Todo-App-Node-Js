
import express, { Application, Request, Response } from 'express'
const app:Application = express()
import fs from 'fs';
import path, { join } from 'path'

const filepath = path.join(__dirname ,"../../../db/todo.json");



 export const todoRouter = express.Router();



todoRouter.get('/',(req:Request, res:Response) =>{
    const data = fs.readFileSync(filepath, {encoding: 'utf-8'});
    console.log("From todos Router");
    
  res.json({
    message: "From todos router",
    data
  })
} )

todoRouter.post('/create-todo', (req:Request, res: Response) => {
  const {title, body} = req.body ;
  console.log(title, body);
  
  res.send('Hello World!')
})

todoRouter.get('/:title', (req:Request, res: Response) => {
  const {title, body} = req.body ;
  console.log(title, body);
  
  res.send('Hello World!')
}) 


todoRouter.put('/update-todo/:title', (req:Request, res: Response) => {
  const {title, body} = req.body ;
  console.log(title, body);
  
  res.send('Hello World!')
}) 


todoRouter.delete('/delete-todo/:title', (req:Request, res: Response) => {
  const {title, body} = req.body ;
  console.log(title, body);
  
  res.send('Hello World!')
}) 

