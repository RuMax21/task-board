import { Navigate, Outlet } from 'react-router';
import { tokenStorage } from '@/features/auth/lib';
import { useAuthStore } from '@/features/auth/model';
import { ROUTES } from '@/shared/config';

export function PrivateRoute() {
  const user = useAuthStore(state => state.user);
  const token = tokenStorage.get();

  if (!token || !user) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return <Outlet />;
}
