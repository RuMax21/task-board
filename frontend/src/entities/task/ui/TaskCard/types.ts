import type { Task } from '../../model';

export interface TaskCardProps {
  task: Task;
  onClick?: (task: Task) => void;
}
