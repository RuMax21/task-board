import { useForm } from 'react-hook-form';
import { taskFormSchema, type TaskFormData } from '../model/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import type { UseCreateTaskFormReturn, UseCreateTaskOptions } from './types';
import type { CreateTaskRequest } from '@/entities/task/model';

export function useTaskForm({
  defaultValues,
  onSubmit,
}: UseCreateTaskOptions): UseCreateTaskFormReturn {
  const form = useForm<TaskFormData>({
    resolver: zodResolver(taskFormSchema),
    defaultValues: {
      title: '',
      description: '',
      status: 'TODO',
      priority: 'LOW',
      visibility: 'ANYONE',
      ...defaultValues,
    },
  });

  const handleSubmit = form.handleSubmit(data =>
    onSubmit(data as CreateTaskRequest),
  );

  return {
    form,
    handleSubmit,
    errors: form.formState.errors,
  };
}
