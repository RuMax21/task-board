import { Navigate } from 'react-router';
import { useAuthStore } from '@/features/Auth/model';
import { ROUTES } from '@/shared/config';
import { RegisterForm } from '@/features/Auth/ui';
import { useLanguage } from '@/shared/i18n';

export default function RegisterPage() {
  const { text } = useLanguage();
  const user = useAuthStore(state => state.user);
  if (user) return <Navigate to={ROUTES.TASKS} replace />;

  return (
    <div>
      <div>
        <h1>{text.auth.signup}</h1>
        <RegisterForm />
      </div>
    </div>
  );
}
