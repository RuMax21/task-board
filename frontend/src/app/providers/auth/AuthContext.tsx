import type { User } from '@/entities/user/model';
import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
} from '@/features/auth/model';
import { createContext } from 'react';

interface AuthContextType {
  user: User | null;
  login: (data: LoginRequest) => Promise<AuthResponse>;
  register: (data: RegisterRequest) => Promise<AuthResponse>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
