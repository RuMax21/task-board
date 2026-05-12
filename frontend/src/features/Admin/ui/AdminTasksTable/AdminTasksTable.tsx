import { useTasks } from '@/entities/task/hooks';
import { Table } from '@/shared/ui';
import { useTasksTableColumns } from './useTasksTableColumns';
import type { ReactElement } from 'react';
import { useNavigate } from 'react-router';
import { ROUTE_PATHS } from '@/shared/config';

export function AdminTasksTable(): ReactElement {
  const { data, isLoading, error } = useTasks();
  const columns = useTasksTableColumns();
  const tasks = data?.items ?? [];
  const navigate = useNavigate();

  return (
    <Table
      rows={tasks}
      columns={columns}
      onRowClick={data => navigate(ROUTE_PATHS.taskDetails(data.id))}
    />
  );
}
