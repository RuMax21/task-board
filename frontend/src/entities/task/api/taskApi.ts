import { apiClient } from '@/shared/api';
import type {
  AssignTaskRequest,
  CreateTaskRequest,
  RejectAssignmentRequest,
  RejectTaskVariables,
  Task,
  TaskListResponse,
  UpdateTaskStatusVariables,
  UpdateTaskVariables,
} from '../model';

export const getListTasks = async (): Promise<TaskListResponse> => {
  const res = await apiClient.get<TaskListResponse>('/tasks');
  return res.data;
};

export const createTask = async (data: CreateTaskRequest): Promise<Task> => {
  const res = await apiClient.post<Task>('/tasks', data);
  return res.data;
};

export const getTaskById = async (id: string): Promise<Task> => {
  const res = await apiClient.get<Task>(`/tasks/${id}`);
  return res.data;
};

export const replaceTask = async ({
  id,
  data,
}: UpdateTaskVariables): Promise<Task> => {
  const res = await apiClient.put<Task>(`/tasks/${id}`, data);
  return res.data;
};

export const removeTask = async (id: string): Promise<void> => {
  await apiClient.delete<boolean>(`/tasks/${id}`);
};

export const updateTaskStatus = async ({
  id,
  data,
}: UpdateTaskStatusVariables): Promise<Task> => {
  const res = await apiClient.patch<Task>(`/tasks/${id}/assignee-status`, data);
  return res.data;
};

export const approveAssignment = async (id: string): Promise<Task> => {
  const res = await apiClient.post<Task>(`/tasks/${id}/assignment/approve`);
  return res.data;
};

export const rejectAssignment = async ({
  id,
  data,
}: RejectTaskVariables): Promise<Task> => {
  const res = await apiClient.post<Task>(
    `/tasks/${id}/assignment/reject`,
    data,
  );
  return res.data;
};

export const addTagToTask = async (
  id: string,
  data: { name: string },
): Promise<Task> => {
  const res = await apiClient.post<Task>(`/tasks/${id}/tags`, data);
  return res.data;
};

export const removeTagFromTask = async (
  id: string,
  tagId: string,
): Promise<Task> => {
  const res = await apiClient.delete<Task>(`/tasks/${id}/tags/${tagId}`);
  return res.data;
};

export const assignTask = async (
  id: string,
  data: AssignTaskRequest,
): Promise<Task> => {
  const res = await apiClient.post<Task>(`/tasks/${id}/assignment`, data);
  return res.data;
};
