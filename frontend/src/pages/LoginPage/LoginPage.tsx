import type { ReactElement } from 'react';
import { useAuthStore } from '@/features/Auth/model';
import { LoginForm } from '@/features/Auth/ui';
import { ROUTES } from '@/shared/config';
import { useLanguage } from '@/shared/i18n';
import { Navigate } from 'react-router';
import styles from './LoginPage.module.scss';

export default function LoginPage(): ReactElement {
  const { text } = useLanguage();
  const user = useAuthStore(state => state.user);
  if (user) return <Navigate to={ROUTES.TASKS} replace />;

  return (
    <section className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.heading}>{text.auth.login}</h1>
        <LoginForm />
      </div>
    </section>
  );
}
