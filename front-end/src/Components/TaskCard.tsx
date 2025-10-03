import React, {useState} from "react";
import type { TaskCardProps } from "../types/todoTypes";
import type { Task } from "../types/todoTypes";
import './styles/taskcard.css'

const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit, onDelete, refreshState }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);

  // NEW: state to toggle editing mode
  const [editing, setEditing] = useState(false); // <-- added

  // NEW: handle save function
  const handleSave = () => { // <-- added
    onEdit(task._id, { ...task, title, description, status });
    setEditing(false);
  };
  return (
    <div className="task-card">
      {editing ? ( // <-- added: show inputs when editing
        <>
          <input
            className="task-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="task-desc"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <p className="task-status">
            <strong>Status:</strong>
            <select
              value={status} // <-- changed from task.status to state
              onChange={(e) => setStatus(e.target.value as Task["status"])}
              className="task-select"
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </p>
          <button className="task-btn save" onClick={handleSave}>Save</button> {/* <-- added */}
          <button className="task-btn cancel" onClick={() => setEditing(false)}>Cancel</button> {/* <-- added */}
        </>
      ) : ( // <-- added: normal display
        <>
          <h3 className="task-title">{title}</h3>
          <p className="task-desc">{description}</p>
          <p className="task-status">
            <strong>Status:</strong>{status} {/* <-- changed from task.status to state */}
            <select
              value={status} // <-- changed from task.status to state
              onChange={(e) =>  {
                setStatus(e.target.value as Task["status"]); // <-- changed
                onEdit(task._id, { ...task, status: e.target.value as Task["status"] }); // <-- changed
              }}
              className="task-select"
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </p>
          <p className="task-date">
            <small>Created: {new Date(task.createdAt).toLocaleString()}</small>
          </p>
          <div className="task-buttons">
            <button className="task-btn edit" onClick={() => setEditing(true)}>Edit</button> {/* <-- changed */}
            <button className="task-btn delete" onClick={() => {
                onDelete(task._id);
                refreshState(task._id);
              }}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};


export default TaskCard;
