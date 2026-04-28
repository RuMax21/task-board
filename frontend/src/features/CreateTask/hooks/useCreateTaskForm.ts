import { useForm } from 'react-hook-form';
import { createTaskSchema, type CreateTaskData } from '../model/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import type { UseCreateTaskOptions } from '../model/types';
import type { CreateTaskRequest } from '@/entities/task/model';

export function useCreateTaskForm({
  defaultValues,
  onSubmit,
}: UseCreateTaskOptions) {
  const form = useForm<CreateTaskData>({
    resolver: zodResolver(createTaskSchema),
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
