import {
  useMutation,
  useQueryClient,
  type UseMutationResult,
} from '@tanstack/react-query';
import {
  taskKeys,
  type Task,
  type TaskListResponse,
  type UpdateTaskStatusVariables,
} from '../model';
import { updateTaskStatus } from '../api/taskApi';
import { updateTaskInList } from './utils';

export function useUpdateTaskStatus(): UseMutationResult<
  Task,
  Error,
  UpdateTaskStatusVariables
> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: UpdateTaskStatusVariables) =>
      updateTaskStatus({ id, data }),
    onSuccess: task => {
      queryClient.setQueryData(taskKeys.detail(task.id), task);
      queryClient.setQueryData<TaskListResponse>(taskKeys.lists(), old =>
        updateTaskInList(old, task),
      );
    },
  });
}
