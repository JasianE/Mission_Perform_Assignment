import React from "react";
import type { TaskCardProps } from "../types/todoTypes";
import type { Task } from "../types/todoTypes";

const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit, onDelete, onStatusChange }) => {
  return (
    <div className="task-card">
      <h3 className="task-title">{task.title}</h3>
      <p className="task-desc">{task.description}</p>
      <p className="task-status">
        <strong>Status:</strong>{" "}
        <select
          value={task.status}
          onChange={(e) =>
            onStatusChange(task._id, e.target.value as Task["status"])
          }
          className="task-select"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </p>
      <p className="task-date">
        <small>Created: {new Date(task.createdAt).toLocaleString()}</small>
      </p>
      <div className="task-buttons">
        <button className="task-btn edit" onClick={() => onEdit(task)}>Edit</button>
        <button className="task-btn delete" onClick={() => onDelete(task._id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;
