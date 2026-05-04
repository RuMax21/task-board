import type { CreateTaskRequest } from '@/entities/task/model';
import type { CreateTaskData } from '../model';
import type { UseFormReturn } from 'react-hook-form';

export interface UseCreateTaskOptions {
  defaultValues?: Partial<CreateTaskData>;
  onSubmit: (data: CreateTaskRequest) => void;
}

export interface UseCreateTaskFormReturn {
  form: UseFormReturn<CreateTaskData>;
  handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  errors: string | unknown;
}
