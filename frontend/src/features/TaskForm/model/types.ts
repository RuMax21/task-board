import type { CreateTaskRequest } from '@/entities/task/model';
import type { TaskFormData } from './schema';

export interface TaskFormProps {
  defaultValues?: Partial<TaskFormData>;
  onSubmit: (data: CreateTaskRequest) => void;
  isSubmitting: boolean;
  onCancel: () => void;
}
