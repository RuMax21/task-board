import {
  useMutation,
  useQueryClient,
  type UseMutationResult,
} from '@tanstack/react-query';
import { assignTask } from '../api/taskApi';
import { taskKeys, type AssignTaskVariables, type Task } from '../model';

export function useAssignTask(): UseMutationResult<
  Task,
  Error,
  AssignTaskVariables,
  unknown
> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: AssignTaskVariables) => assignTask(id, data),
    onSuccess: (task: Task) => {
      queryClient.invalidateQueries({ queryKey: taskKeys.all });
      queryClient.invalidateQueries({ queryKey: taskKeys.detail(task.id) });
    },
  });
}
