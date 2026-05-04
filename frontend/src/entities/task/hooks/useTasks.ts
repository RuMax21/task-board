import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { getListTasks } from '../api/taskApi';
import { taskKeys, type TaskListResponse } from '../model';

export function useTasks(): UseQueryResult<TaskListResponse, Error> {
  return useQuery({
    queryKey: taskKeys.lists(),
    queryFn: getListTasks,
  });
}
