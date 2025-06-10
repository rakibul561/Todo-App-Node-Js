import express, { Application, Request, Response } from 'express'
const app:Application = express()
import fs from 'fs';
import path, { join } from 'path'
import { todoRouter } from './app/todos/todos.Routes';


app.use(express.json());





app.use('/todos', todoRouter)


// get new todos
app.get('/', (req:Request, res: Response) => {
  res.send('wellcome to  Todos App  f!!!')
})



export default app;