import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { getTaskById } from '../api/taskApi';
import { taskKeys, type Task } from '../model';

export function useTask(id: string): UseQueryResult<Task, Error> {
  return useQuery({
    queryKey: taskKeys.detail(id),
    queryFn: () => getTaskById(id),
    enabled: !!id,
  });
}
