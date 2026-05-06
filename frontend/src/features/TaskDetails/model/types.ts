import type { Task } from '@/entities/task/model';

export interface TaskDetailsHeaderProps {
  onRemove: () => void;
  onEdit: () => void;
  onBack: () => void;
  isRemoving: boolean;
}

export interface TaskDetailsProps {
  task: Task;
  onRemove: () => void;
  onEdit: () => void;
  onBack: () => void;
  isRemoving: boolean;
}
