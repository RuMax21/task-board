import {
  useMutation,
  useQueryClient,
  type UseMutationResult,
} from '@tanstack/react-query';
import { approveAssignment } from '../api/taskApi';
import { taskKeys, type Task, type TaskListResponse } from '../model';
import { updateTaskInList } from './utils';

export function useApproveAssignment(): UseMutationResult<Task, Error, string> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => approveAssignment(id),
    onSuccess(task) {
      queryClient.setQueryData(taskKeys.detail(task.id), task);
      queryClient.setQueryData<TaskListResponse>(taskKeys.lists(), old =>
        updateTaskInList(old, task),
      );
    },
  });
}
