import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import tasksRouter from "./routes/tasksRouter.js"

const PORT = process.env.PORT || 3000;

const connectionString = process.env.MONGO_URI

mongoose
    .connect(connectionString)
    .then(() => console.log("Connected to DB"))
    .catch(() => console.log("Got error"));

const app = express();

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); // used for development, made life easier

app.use("/", tasksRouter)

app.listen("3000", () =>{
    console.log('Server running on port ' + PORT);
})
