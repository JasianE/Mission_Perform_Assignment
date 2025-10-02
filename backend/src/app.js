import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import tasksRouter from "./routes/tasksRouter.js"

const PORT = 3000;

dotenv.config();

const connectionString = "mongodb+srv://mission_perform:Password123@cluster0.wrnrs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
    .connect(connectionString)
    .then(() => console.log("Connected to DB"))
    .catch(() => console.log("Got error"));

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/", tasksRouter)

app.listen("3000", () =>{
    console.log('Server running on port ' + "3000")
})
