
import { MongoClient, ServerApiVersion } from "mongodb";
import app from "./app";
 let server ;
const port = 5000


const uri = "mongodb+srv://mongodb:mongodb@cluster0.fmdvppd.mongodb.net/todosDB?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});







  /* create a bootsrap */
 const bootstrap = async () =>{
   await client.connect();
  console.log("connect to mongodb");
  
    server = app.listen(port ,()  => {
  console.log(`Example app listening on port ${port}`)

})
 }

 bootstrap()