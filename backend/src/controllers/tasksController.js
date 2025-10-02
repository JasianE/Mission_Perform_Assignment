import Task from "../models/Task.model.js";
import mongoose from "mongoose";

export async function CreateTask(req, res, next){
    try {
        const task = new Task(req.body);
        const savedTask = await task.save();
        res.status(201).json(savedTask);
  } catch (err) {
        res.status(400).json({ error: err.message });
  }
}

export async function GetAllTasks(req,res,next){
    try {
        const tasks = await Task.find();
        res.json(tasks);
  } catch (err) {
        res.status(500).json({ error: err.message });
  }
}

export async function FindTaskById(req,res,next){
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ error: "Task not found" });
        res.json(task);
  } catch (err) {
        res.status(500).json({ error: err.message });
  }
}

export async function UpdateTask(req,res,next){
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body);
        if (!updatedTask) {
            return res.status(404).json({ error: "Task not found" });
        }
        res.json(updatedTask);
  } catch (err) {
        res.status(400).json({ error: err.message });
  }
}

export async function DeleteTask(req,res,next){
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (!deletedTask) {
            return res.status(404).json({ error: "Task not found" });
        }
        res.json({ message: "Task deleted" });
  } catch (err) {
        res.status(500).json({ error: err.message });
  }
}