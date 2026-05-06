import type { Task } from '@/entities/task/model';

export interface KanbanColumnProps {
  status: string;
  tasks: Task[];
  onTaskClick?: (task: Task) => void;
}

export interface KanbanProps {
  tasks: Task[];
  onTaskClick?: (task: Task) => void;
}
