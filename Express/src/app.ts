import express, { Application, NextFunction, Request, Response } from 'express';
const app: Application = express();
import fs from 'fs';
import path from 'path';
import { todoRouter } from './app/todos/todos.Routes';

app.use(express.json());
app.use('/todos', todoRouter);

// get new todos
app.get('/',
  (req: Request, res: Response, next: NextFunction) => {
    console.log({
      url: req.url,
      method: req.method,
      header: req.header
    });
    next();
  },
  (req: Request, res: Response, next: NextFunction) => {
    try {
      // console.log(something);
      res.send('welcome to Todos App!');
    } catch (error) {
      next(error);
    }
  }
);

// error route
app.get('/error',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // console.log(something);
      res.send('welcome to error er duniya!!!');
    } catch (error) {
      next(error);
    }
  }
);

app.use(( req,res, next) =>{
  res.status(404).json({message: "Route not Found"})
})


// global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    console.log("error", error);
    res.status(400).json({
      message: "something went wrong from global error handaler",
      error
    });
  }
});

export default app;
