import express from "express";
import "dotenv/config";
import "./config/db.js";
import taskRouter from "./routes/tasks.js";
//creating an app
//dedining port:You're setting the PORT variable to 2005.
//This is the port number on which the web server will listen for incoming requests.
//You can change this to any other available port if needed

//Creating an instance of the Express application:This instance will be used to define routes,
// middleware, and handle incoming HTTP requests.
const app = express();
app.use(express.json());


app.use("/task", taskRouter);


  app.listen(process.env.PORT, () => {
    console.log("started the server at port " + process.env.PORT);
  });