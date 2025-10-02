//Contains all todo service logic

import type { CreateTaskParams } from "../types/todoTypes";

export async function Create_Todo(params:CreateTaskParams) {
    //Creates todo, not much to say here haha
    try {
      const response = await fetch("http://localhost:3000/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Something went wrong");
      }

      return response.json();
    } catch (err){
        return err;
    }
}

export async function GetAllTodos() {
    //Gets all todos, not much else to say haha
    try {
        const response = await fetch('http://localhost:3000/all'); // dont need body here

        if(!response.ok){
            const errData = await response.json();
            throw new Error(errData.err || "Something went wrong")
        }

        return response.json();
    } catch(err){
        console.log(err);
    }
}

export async function DeleteTodo(id: String){

}