import React, {useEffect, useState} from "react";
import { GetAllTodos } from "../services/todo.service";
import { UpdateTodo, DeleteTodo, } from "../services/todo.service";
import type { Task } from "../types/todoTypes";

import TaskCard from "./TaskCard";
import Form from "./Form";

const TaskList = () => {
    const [todos, setTodos] = useState<Task[]>([]);
    
    useEffect(() => { // Fetch all todos and set them in state
        GetAllTodos()
        .then((res) => {
            setTodos(res)
        }) 
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const refreshState = (id: string) => {
        setTodos(prev => prev.filter(task => task._id !== id));
    }

    const handleTaskCreated = (newTask: Task) => {
        setTodos(prev => [...prev, newTask]); // add task instantly
    };

    return(
        <div>
            <Form handleTaskCreated = {handleTaskCreated}/>
            {todos.map((element) => {
                return(
                    <TaskCard task={element} onEdit={UpdateTodo} onDelete={DeleteTodo} refreshState={refreshState} key={element._id}/>
                )
            })}
        </div>
    )
}

export default TaskList;