import { useAuthStore } from '@/features/auth/model';
import { LoginForm } from '@/features/auth/ui';
import { ROUTES } from '@/shared/config';
import { Navigate } from 'react-router';

export default function LoginPage() {
  const user = useAuthStore(state => state.user);

  if (user) return <Navigate to={ROUTES.TASKS} replace />;

  return (
    <div>
      <div>
        <h1>Login</h1>
        <LoginForm />
      </div>
    </div>
  );
}
