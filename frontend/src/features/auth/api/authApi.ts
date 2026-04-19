import { apiClient } from '@/shared/api';
import type {
  AuthResponse,
  ChangePasswordRequest,
  LoginRequest,
  RegisterRequest,
} from '../model';

export const login = async (data: LoginRequest): Promise<AuthResponse> => {
  const res = await apiClient.post<AuthResponse>('/auth/login', data);
  return res.data;
};

export const register = async (
  data: RegisterRequest,
): Promise<AuthResponse> => {
  const res = await apiClient.post<AuthResponse>('/auth/register', data);
  return res.data;
};

export const changePassword = async (
  data: ChangePasswordRequest,
): Promise<void> => {
  await apiClient.patch('/auth/password', data);
};
