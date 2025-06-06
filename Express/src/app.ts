import express, { Application, Request, Response } from 'express'
const app:Application = express()
 
// get new todos
app.get('/', (req:Request, res: Response) => {
  res.send('wellcome to Todos App !!!')
})
// get all todos
app.get('/todos', (req:Request, res: Response) => {
  res.send('Hello World!')
})
app.post('/todos/create-todo', (req:Request, res: Response) => {
  res.send('Hello World!')
})



export default app;