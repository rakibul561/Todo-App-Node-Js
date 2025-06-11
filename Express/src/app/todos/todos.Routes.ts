
import express, { Application, Request, Response } from 'express'
const app:Application = express()
import fs from 'fs';
import path, { join } from 'path'
import { client } from '../../config/mongodb';

const filepath = path.join(__dirname ,"../../../db/todo.json");



 export const todoRouter = express.Router();



todoRouter.get('/', async (req:Request, res:Response) =>{
    
    const db = await client.db("todosDB")
    const collection = await db.collection('todos')
 
 const cursor =  collection.find({})
 const todos = await cursor.toArray();
  res.json(todos)

} )



todoRouter.post('/create-todo',async (req:Request, res: Response) => {

  const {title,priority, description} = req.body ;


    const db = await client.db("todosDB")
    const collection = await db.collection('todos')
  await collection.insertOne({
  title: title,
  description: description,
  priorit:priority,
  isCompleted:false
})

 const cursor =  collection.find({})
 const todos = await cursor.toArray();


  


  
  res.send(todos)
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

