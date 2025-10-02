import React, {useEffect, useState} from "react";
import { GetAllTodos } from "../services/todo.service";

import TaskCard from "./TaskCard";

function TaskList(){
    const [todos, setTodos] = useState([]);
    
    useEffect(() => { // Fetch all todos and set them in state
        GetAllTodos()
        .then((res) => {
            setTodos(res)
        }) 
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return(
        <div>
            {todos.map((element) => {
                return(
                    <TaskCard task={element} />
                )
            })}
        </div>
    )
}

export default TaskList;