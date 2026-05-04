import { jwtDecode } from 'jwt-decode';
import { ACCESS_TOKEN } from '@/shared/model';
import type { AccessToken, JwtPayload } from '../model';
import type { User } from '@/entities/user/model';

export const tokenStorage = {
  get: (): AccessToken | null => {
    return localStorage.getItem(ACCESS_TOKEN);
  },
  set: (token: AccessToken): void => {
    return localStorage.setItem(ACCESS_TOKEN, token);
  },
  remove: (): void => {
    localStorage.removeItem(ACCESS_TOKEN);
  },
};

export const parseJwt = (token: string): JwtPayload | null => {
  try {
    return jwtDecode<JwtPayload>(token);
  } catch {
    return null;
  }
};

export const getUserFromToken = (): JwtPayload | null => {
  const token = tokenStorage.get();
  if (!token) return null;
  return parseJwt(token);
};

export const mapJwtToUser = (payload: JwtPayload): User => {
  return {
    id: payload.sub,
    nickname: payload.nickname,
    email: payload.email,
    role: payload.role,
  };
};
