import type { CreateTaskRequest } from '@/entities/task/model';
import type { CreateTaskData } from './schema';

export interface UseCreateTaskOptions {
  defaultValues?: Partial<CreateTaskData>;
  onSubmit: (data: CreateTaskRequest) => void;
}

export interface CreateTaskFormProps {
  defaultValues?: Partial<CreateTaskData>;
  onSubmit: (data: CreateTaskRequest) => void;
  isSubmitting: boolean;
  onCancel: () => void;
}
