
import express, { Application, Request, Response } from 'express'
const app:Application = express()
import fs from 'fs';
import path, { join } from 'path'
import { client } from '../../config/mongodb';
import { ObjectId } from 'mongodb';




 export const todoRouter = express.Router();


  
//  todos get route 
todoRouter.get('/', async (req:Request, res:Response) =>{
    
    const db = await client.db("todosDB")
    const collection = await db.collection('todos')
 
 const cursor =  collection.find({})
 const todos = await cursor.toArray();
  res.json(todos)

} )


  // todos post route
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


//  single todo get route 
todoRouter.get('/:id',async (req:Request, res: Response) => {
  const id = req.params.id;
   const db = await client.db("todosDB")
  const collection = await db.collection('todos')
  const todo = await collection.findOne({_id: new ObjectId(id)})
  
  res.json(todo)
}) 

//  single todo updated
todoRouter.put('/update-todo/:id', async (req:Request, res: Response) => {
const id = req.params.id;
   const db = await client.db("todosDB")
  const collection = await db.collection('todos')
  const {title,priority, description, isCompleted} = req.body ;
  const filter = {_id: new ObjectId(id)};
  const updatedTodo = await collection.updateOne(
    filter, {$set: {title,priority,description,isCompleted }},
    {upsert: true}
  )



  res.json(updatedTodo)
}) 


//  single todo deleted

todoRouter.delete('/delete-todo/:id', async (req:Request, res: Response) => {
   const id = req.params.id;
   const db = await client.db("todosDB")
  const collection = await db.collection('todos')
  const data = await collection.deleteOne({_id: new ObjectId(id)})
  console.log(data);
  
  
  
  res.json(data)
}) 

