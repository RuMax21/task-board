import { Navigate, Outlet } from 'react-router';
import { tokenStorage } from '@/features/Auth/lib';
import { useAuthStore } from '@/features/Auth/model';
import { ROUTES } from '@/shared/config';
import type { ReactNode } from 'react';

export function PrivateRoute(): ReactNode {
  const user = useAuthStore(state => state.user);
  const token = tokenStorage.get();

  if (!token || !user) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return <Outlet />;
}
