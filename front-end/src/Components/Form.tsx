import React, { useState, type FormEvent } from "react";
import { Create_Todo } from "../services/todo.service";
import type { CreateTaskParams } from "../types/todoTypes";
import type { FormProps } from "../types/todoTypes";

const Form: React.FC<FormProps> = ({handleTaskCreated}) =>{
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState<CreateTaskParams['status']>("To Do");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try{
            const new_task = await Create_Todo({title, description, status})

            setTitle("");
            setDescription("");
            setStatus("In Progress");

            handleTaskCreated(new_task);
        } catch(err : any){
            console.log(err);
        } finally {
            setLoading(false);
        }
    }
    return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Task</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        value={status}
        onChange={(e) => {
            setStatus(e.target.value as CreateTaskParams["status"]);
        }}
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <button type="submit" disabled={loading}>
        {loading ? "Adding..." : "Add Task"}
      </button>
    </form>
  );
}

export default Form;