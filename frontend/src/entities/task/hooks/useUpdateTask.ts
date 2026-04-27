import {
  useMutation,
  useQueryClient,
  type UseMutationResult,
} from '@tanstack/react-query';
import {
  taskKeys,
  type Task,
  type TaskListResponse,
  type UpdateTaskContext,
  type UpdateTaskVariables,
} from '../model';
import { replaceTask } from '../api/taskApi';

export function useUpdateTask(): UseMutationResult<
  Task,
  Error,
  UpdateTaskVariables,
  UpdateTaskContext
> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: UpdateTaskVariables) =>
      replaceTask({ id, data }),
    onMutate: async ({ id, data }) => {
      await queryClient.cancelQueries({ queryKey: taskKeys.lists() });

      const prevData = queryClient.getQueryData<TaskListResponse>(
        taskKeys.lists(),
      );

      if (prevData) {
        queryClient.setQueryData<TaskListResponse>(taskKeys.lists(), {
          ...prevData,
          items: prevData.items.map(current =>
            current.id === id ? { ...current, ...data } : current,
          ),
        });
      }

      return { prevData };
    },
    onSuccess: (updatedTask: Task) => {
      queryClient.setQueryData<Task>(
        taskKeys.detail(updatedTask.id),
        updatedTask,
      );
    },
    onError: (_, __, context) => {
      if (context?.prevData) {
        queryClient.setQueryData(taskKeys.lists(), context.prevData);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: taskKeys.lists() });
    },
  });
}
