import {
  useMutation,
  useQueryClient,
  type UseMutationResult,
} from '@tanstack/react-query';
import { rejectAssignment } from '../api/taskApi';
import {
  taskKeys,
  type RejectTaskVariables,
  type Task,
  type TaskListResponse,
} from '../model';
import { updateTaskInList } from './utils';

export function useRejectAssignment(): UseMutationResult<
  Task,
  Error,
  RejectTaskVariables
> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: RejectTaskVariables) =>
      rejectAssignment({ id, data }),
    onSuccess: task => {
      queryClient.setQueryData(taskKeys.detail(task.id), task);
      queryClient.setQueryData<TaskListResponse>(taskKeys.lists(), old =>
        updateTaskInList(old, task),
      );
    },
  });
}
