import {
  useMutation,
  useQueryClient,
  type UseMutationResult,
} from '@tanstack/react-query';
import { removeTask } from '../api/taskApi';
import {
  taskKeys,
  type TaskListResponse,
  type UpdateTaskContext,
} from '../model';

export function useRemoveTask(): UseMutationResult<
  void,
  Error,
  string,
  UpdateTaskContext
> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => removeTask(id),
    onMutate: async id => {
      await queryClient.cancelQueries({ queryKey: taskKeys.lists() });

      const prevData = queryClient.getQueryData<TaskListResponse>(
        taskKeys.lists(),
      );

      if (prevData) {
        queryClient.setQueryData<TaskListResponse>(taskKeys.lists(), {
          ...prevData,
          items: prevData.items.filter(task => task.id !== id),
        });
      }

      return { prevData };
    },
    onSuccess: (_, id) => {
      queryClient.removeQueries({ queryKey: taskKeys.detail(id) });
    },
    onError: (_, __, context) => {
      if (context?.prevData) {
        queryClient.setQueryData(taskKeys.lists(), context.prevData);
      }
    },
  });
}
