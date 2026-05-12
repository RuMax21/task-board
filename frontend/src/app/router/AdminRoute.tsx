import { useAuthStore } from '@/features/Auth/model';
import { ROUTES } from '@/shared/config';
import type { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router';

export function AdminRoute(): ReactNode {
  const userRole = useAuthStore(state => state.user?.role);

  if (!(userRole === 'ADMIN')) return <Navigate to={ROUTES.TASKS} replace />;

  return <Outlet />;
}
