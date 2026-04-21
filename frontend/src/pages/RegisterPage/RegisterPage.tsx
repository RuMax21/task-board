import { Navigate } from 'react-router';
import { useAuthStore } from '@/features/auth/model';
import { ROUTES } from '@/shared/config';
import { RegisterForm } from '@/features/auth/ui';

export default function RegisterPage() {
  const user = useAuthStore(state => state.user);
  if (user) return <Navigate to={ROUTES.TASKS} replace />;

  return (
    <div>
      <div>
        <h1>Sign Up</h1>
        <RegisterForm />
      </div>
    </div>
  );
}
