import type { Task, TaskListResponse } from '../model';

export function updateTaskInList(
  data: TaskListResponse | undefined,
  updated: Task,
): TaskListResponse | undefined {
  if (!data) return data;

  return {
    ...data,
    items: data.items?.map(t => (t.id === updated.id ? updated : t)),
  };
}
