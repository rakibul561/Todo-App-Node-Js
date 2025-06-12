
import { MongoClient, ServerApiVersion } from "mongodb";
import app from "./app";
import { client } from "./config/mongodb";
 let server ;
const port = 5000


  /* create a bootsrap */
 const bootstrap = async () =>{
   await client.connect();
  console.log("connect to mongodb");
  
    server = app.listen(port ,()  => {
  console.log(`Example app listening on port ${port}`)

})
 }

 bootstrap()