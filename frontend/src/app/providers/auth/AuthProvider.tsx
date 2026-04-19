import type { ReactNode } from 'react';
import { useLogin, useRegister } from '@/features/auth/hooks';
import { useLogout } from '@/features/auth/hooks/useLogout';
import { useAuthStore } from '@/features/auth/model';
import { AuthContext } from './AuthContext';

export function AuthProvider({ children }: { children: ReactNode }) {
  const user = useAuthStore(state => state.user);
  const { mutateAsync: login } = useLogin();
  const { mutateAsync: register } = useRegister();
  const logout = useLogout();

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
