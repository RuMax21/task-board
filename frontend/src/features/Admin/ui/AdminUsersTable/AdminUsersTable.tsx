import type { ReactElement } from 'react';
import { useUsersTableColumns } from './useUsersTableColumns';
import { useUsers } from '@/entities/user/hooks';
import { Table } from '@/shared/ui';

export function AdminUsersTable(): ReactElement {
  const columns = useUsersTableColumns();
  const { usersViaAdmin: users, isLoading, error } = useUsers();

  return <Table rows={users.data ?? []} columns={columns} />;
}
