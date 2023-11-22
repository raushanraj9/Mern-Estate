// Import the 'express' module
import express from "express";

import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
dotenv.config();

// Create an instance of the Express application
const app = express();

// Connect to the MongoDB database server with the specified URL
mongoose.connect("mongodb://127.0.0.1:27017/Estate")
  .then(() => {
    // If the connection is successful, log a message indicating a successful connection
    console.log('Connected to Database');
  })
  .catch(err => {
    // If there is an error connecting to the database, log the error message
    console.log('Error connecting to database', err);
  });



// Define a route for the root ("/") path
app.use("/user",userRouter);

// Start the server and listen on port 3001
app.listen(3001, () => {
    // This callback function is executed once the server is successfully started
    console.log("Server is running on port 3001!");
});
