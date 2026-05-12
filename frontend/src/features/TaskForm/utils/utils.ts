import type { TaskFormData } from '../model/schema';
import type { UpdateTaskRequest } from '@/entities/task/model';

export const prepareUpdateTaskData = (
  data: TaskFormData,
): UpdateTaskRequest => {
  const { assigneeId, ...rest } = data;

  return rest;
};
