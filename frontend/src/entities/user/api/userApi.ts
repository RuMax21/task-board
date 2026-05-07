import { apiClient } from '@/shared/api';
import type { User } from '../model';

export const getUsers = async (): Promise<User[]> => {
  const res = await apiClient.get<User[]>('/users');
  return res.data;
};
