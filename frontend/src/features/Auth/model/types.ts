import type { Role, User } from '@/entities/user/model';

export type AccessToken = string;

export interface LoginRequest {
  nickname: string;
  password: string;
}

export interface RegisterRequest {
  nickname: string;
  password: string;
  email: string;
}

export interface AuthResponse {
  accessToken: AccessToken;
  user: User;
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export interface JwtPayload {
  sub: string;
  nickname: string;
  email: string;
  role: Role;
}
