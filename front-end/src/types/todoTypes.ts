export type CreateTaskParams = {
  title: string;
  description: string;
  status?: "To Do" | "In Progress" | "Done";
};

export interface Task {
  _id: string;
  title: string;
  description: string;
  status: "To Do" | "In Progress" | "Done";
  createdAt: string;
}

export interface TaskCardProps {
  task: Task;
  onEdit: (id: string, task: Task) => void;
  onDelete: (id: string) => void;
  refreshState: (id: string) => void;
}

export interface FormProps {
    handleTaskCreated: (task: Task) => void;
}
