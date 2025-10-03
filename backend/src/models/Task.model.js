import mongoose from "mongoose";
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: ""
  },
  status: {
    type: String,
    enum: ["To Do", "In Progress", "Done"], // ensures its one of these three values
    default: "To Do"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
