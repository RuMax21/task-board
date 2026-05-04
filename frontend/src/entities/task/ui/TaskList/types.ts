import type { Task } from '../../model';

export interface TaskListProps {
  tasks: Task[];
  onTaskClick?: (task: Task) => void;
}
