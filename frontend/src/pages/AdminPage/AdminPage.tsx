import { AdminTasksTable, AdminUsersTable } from '@/features/Admin/ui';
import { useLanguage } from '@/shared/i18n';
import type { ReactElement } from 'react';

export default function AdminPage(): ReactElement {
  const { text } = useLanguage();

  return (
    <section>
      <h1>{text.admin.adminPage}</h1>
      <h2>{text.admin.users}</h2>
      <AdminUsersTable />
      <h2>{text.admin.tasks}</h2>
      <AdminTasksTable />
    </section>
  );
}
