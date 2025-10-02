export type CreateTaskParams = {
  title: string;
  description: string;
  status?: "Pending" | "In Progress" | "Completed";
};

export interface Task {
  _id: string;
  title: string;
  description: string;
  status: "Pending" | "In Progress" | "Completed";
  createdAt: string;
}

export interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: Task["status"]) => void;
}
