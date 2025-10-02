import express from "express";
import '../models/Task.model.js'
import { CreateTask } from "../controllers/tasksController.js";
import { GetAllTasks } from "../controllers/tasksController.js";
import { FindTaskById } from "../controllers/tasksController.js";
import { DeleteTask } from "../controllers/tasksController.js";
import { UpdateTask } from "../controllers/tasksController.js"; // turn this all to one line later

const router = express.Router(); // create router obj

/*Post endpoints (CREATE) */
router.post('/create', CreateTask);

/*Get endpoints (READ)*/
router.get('/all', GetAllTasks);
router.get('/task/:id', FindTaskById);

/*Put endpoints (UPDATE)*/
router.put('/update/:id', UpdateTask);

/*Delete endpoints (DELETE)*/ 
router.delete('/delete/:id', DeleteTask);


export default router;


