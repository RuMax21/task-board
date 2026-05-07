import type { CreateTaskRequest } from '@/entities/task/model';
import type { TaskFormData } from '../model';
import type { UseFormReturn } from 'react-hook-form';

export interface UseCreateTaskOptions {
  defaultValues?: Partial<TaskFormData>;
  onSubmit: (data: CreateTaskRequest) => void;
}

export interface UseCreateTaskFormReturn {
  form: UseFormReturn<TaskFormData>;
  handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  errors: string | unknown;
}

export interface UseAssigneeOptionsReturn {
  value: string;
  label: string;
}
