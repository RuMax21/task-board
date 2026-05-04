import type { Task } from '@/entities/task/model';

export interface UseTaskDetailsReturn {
  task: Task | undefined;
  error: Error | null;
  isLoading: boolean;
  isRemoving: boolean;
  handleRemove: () => void;
  handleEdit: () => void;
  handleBack: () => void;
}
