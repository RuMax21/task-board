import { AdminTasksTable, AdminUsersTable } from '@/features/Admin/ui';
import { useLanguage } from '@/shared/i18n';
import type { ReactElement } from 'react';
import styles from './AdminPage.module.scss';

export default function AdminPage(): ReactElement {
  const { text } = useLanguage();

  return (
    <section className={styles.page}>
      <h1 className={styles.title}>{text.admin.adminPage}</h1>
      <div className={styles.section}>
        <h2 className={styles.sectionHeader}>{text.admin.users}</h2>
        <AdminUsersTable />
      </div>
      <div className={styles.section}>
        <h2 className={styles.sectionHeader}>{text.admin.tasks}</h2>
        <AdminTasksTable />
      </div>
    </section>
  );
}
