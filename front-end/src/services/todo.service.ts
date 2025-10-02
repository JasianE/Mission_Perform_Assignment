//Contains all todo service logic

import type { CreateTaskParams } from "../types/todoTypes";

export async function Create_Todo(params:CreateTaskParams) {
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
