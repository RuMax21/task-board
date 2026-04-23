import { apiClient } from '@/shared/api';
import type {
  CreateTaskRequest,
  RejectAssignmentRequest,
  Task,
  TaskListResponse,
  UpdateTaskRequest,
  UpdateTaskStatusRequest,
} from '../model';

export const getListTasks = async (): Promise<TaskListResponse> => {
  const res = await apiClient.get<TaskListResponse>('/tasks');
  return res.data;
};

export const createTask = async (
  data: CreateTaskRequest,
): Promise<CreateTaskRequest> => {
  const res = await apiClient.post<CreateTaskRequest>('/tasks', data);
  return res.data;
};

export const getTaskById = async (id: string): Promise<Task> => {
  const res = await apiClient.get<Task>(`/tasks/${id}`);
  return res.data;
};

export const replaceTask = async (
  id: string,
  data: UpdateTaskRequest,
): Promise<Task> => {
  const res = await apiClient.put<Task>(`/tasks/${id}`, data);
  return res.data;
};

export const deleteTask = async (id: string): Promise<boolean> => {
  const res = await apiClient.delete<boolean>(`/tasks/${id}`);
  return res.data;
};

export const updateTaskStatus = async (
  id: string,
  data: UpdateTaskStatusRequest,
): Promise<Task> => {
  const res = await apiClient.patch<Task>(`/tasks/${id}/assignee-status`, data);
  return res.data;
};

export const approveAssignment = async (id: string): Promise<Task> => {
  const res = await apiClient.post<Task>(`/tasks/${id}/assignment/approve`);
  return res.data;
};

export const rejectAssignment = async (
  id: string,
  data: RejectAssignmentRequest,
): Promise<Task> => {
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
