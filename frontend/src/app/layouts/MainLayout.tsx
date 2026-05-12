import { useLogout } from '@/features/Auth/hooks';
import { useAuthStore } from '@/features/Auth/model';
import { ROUTES } from '@/shared/config';
import { useLanguage } from '@/shared/i18n';
import { NavBar } from '@/widgets/NavBar';
import type { ReactElement } from 'react';
import { Outlet } from 'react-router';
import styles from './MainLayout.module.scss';

export default function MainLayout(): ReactElement {
  const user = useAuthStore(state => state.user);
  const onLogout = useLogout();
  const { text } = useLanguage();

  const links = [
    { to: ROUTES.TASKS, label: text.links.tasks },
    { to: ROUTES.PROFILE, label: text.links.profile },
  ];

  if (user?.role === 'ADMIN') {
    links.push({ to: ROUTES.ADMIN, label: text.links.admin });
  }

  return (
    <>
      <header className={styles.header}>
        <NavBar
          links={links}
          onLogout={onLogout}
          logoutText={text.common.btn.logout}
        />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}
