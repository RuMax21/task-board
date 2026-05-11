export type Role = 'USER' | 'ADMIN';

export interface User {
  id: string;
  nickname: string;
  email: string;
  role: Role;
}
export interface UserViaAdmin {
  id: string;
  nickname: string;
  email: string;
  role: Role;
  bannedAt: string;
  createdAt: string;
}
