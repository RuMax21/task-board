import type { User } from '@/entities/user/model';
import { createContext } from 'react';

interface AuthContextType {
  user: User | null;
}

export const AuthContext = createContext<AuthContextType | null>(null);
