import { Navigate } from 'react-router';
import { useAuthStore } from '@/features/Auth/model';
import { ROUTES } from '@/shared/config';
import { RegisterForm } from '@/features/Auth/ui';
import { useLanguage } from '@/shared/i18n';
import type { ReactElement } from 'react';
import styles from './RegisterPage.module.scss';

export default function RegisterPage(): ReactElement {
  const { text } = useLanguage();
  const user = useAuthStore(state => state.user);
  if (user) return <Navigate to={ROUTES.TASKS} replace />;

  return (
    <section className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.heading}>{text.auth.signup}</h1>
        <RegisterForm />
      </div>
    </section>
  );
}
