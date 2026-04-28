import {
  useMutation,
  useQueryClient,
  type UseMutationResult,
} from '@tanstack/react-query';
import {
  taskKeys,
  type CreateTaskRequest,
  type Task,
  type TaskListResponse,
} from '../model';
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
      queryClient.setQueryData<TaskListResponse>(taskKeys.lists(), old => {
        if (!old) return old;

        return {
          ...old,
          items: [...(old.items ?? []), newTask],
        };
      });
      queryClient.setQueryData<Task>(taskKeys.detail(newTask.id), newTask);
    },
  });
}
