import {
  useMutation,
  useQueryClient,
  type UseMutationResult,
} from '@tanstack/react-query';
import { taskKeys, type CreateTaskRequest, type Task } from '../model';
import { createTask } from '../api/taskApi';

export function useCreateTask(): UseMutationResult<
  Task,
  Error,
  CreateTaskRequest
> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateTaskRequest) => createTask(data),
    onSuccess: (newTask: Task) => {
      queryClient.setQueryData<Task[]>(taskKeys.lists(), (old = []) => [
        ...old,
        newTask,
      ]);
      queryClient.setQueryData<Task>(taskKeys.detail(newTask.id), newTask);
    },
  });
}
