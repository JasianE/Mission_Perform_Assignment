import express from "express";
import '../models/Task.model.js'
import { CreateTask } from "../controllers/tasksController.js";
import { GetAllTasks } from "../controllers/tasksController.js";
import { FindTaskById } from "../controllers/tasksController.js";

const router = express.Router(); // create router obj

/*Post endpoints (CREATE) */
router.post('/create', CreateTask);

/*Get endpoints (READ)*/
router.get('/all', () => {console.log('hello1')});


export default router;


