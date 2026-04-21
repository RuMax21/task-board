import type { ReactNode } from 'react';
import { useAuthStore } from '@/features/auth/model';
import { AuthContext } from './AuthContext';

export function AuthProvider({ children }: { children: ReactNode }) {
  const user = useAuthStore(state => state.user);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
