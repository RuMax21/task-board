import { apiClient } from '@/shared/api';
import type { User, UserViaAdmin } from '../model';

export const getUsers = async (): Promise<User[]> => {
  const res = await apiClient.get<User[]>('/users');
  return res.data;
};

export const getUsersViaAdmin = async (): Promise<UserViaAdmin[]> => {
  const res = await apiClient.get<UserViaAdmin[]>('/admin/users');
  return res.data;
};

export const banUser = async (userId: string): Promise<void> => {
  await apiClient.post<void>(`/admin/users/${userId}/ban`);
};

export const unbanUser = async (userId: string): Promise<void> => {
  await apiClient.post<void>(`/admin/users/${userId}/unban`);
};
