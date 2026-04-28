import { Navigate } from 'react-router';
import { useAuthStore } from '@/features/Auth/model';
import { ROUTES } from '@/shared/config';
import { RegisterForm } from '@/features/Auth/ui';

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
