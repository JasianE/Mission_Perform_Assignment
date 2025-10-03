import React, {useState} from "react";
import type { TaskCardProps } from "../types/todoTypes";
import type { Task } from "../types/todoTypes";

const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit, onDelete, refreshState }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);

  return (
    <div className="task-card">
      <h3 className="task-title">{title}</h3>
      <p className="task-desc">{description}</p>
      <p className="task-status">
        <strong>Status:</strong>{task.status}
        <select
          value={task.status}
          onChange={(e) =>  {
            task.status = e.target.value as Task["status"];
            setStatus(task.status);
            onEdit(task._id, task);
            }
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
        <button className="task-btn edit" onClick={() => {

          onEdit(task._id, task)
          
          }}>Edit</button>
        <button className="task-btn delete" onClick={() => {
            onDelete(task._id);
            refreshState(task._id);
          }}>Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;
