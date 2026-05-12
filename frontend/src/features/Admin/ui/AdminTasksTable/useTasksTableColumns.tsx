import { useRemoveTask, useUpdateTaskStatus } from '@/entities/task/hooks';
import { useAssignTask } from '@/entities/task/hooks/useAssignTask';
import {
  STATUS_OPTIONS,
  TASK_PRIORITY_LABELS,
  TASK_STATUS_LABELS,
  type Task,
  type TaskStatus,
} from '@/entities/task/model';
import { useUsers } from '@/entities/user/hooks';
import { useLanguage } from '@/shared/i18n';
import { Button, FormSelect } from '@/shared/ui';
import type { ColumnDef } from '@tanstack/react-table';
import { useMemo } from 'react';

export const useTasksTableColumns = (): ColumnDef<Task>[] => {
  const { mutate: updateStatus } = useUpdateTaskStatus();
  const { mutate: assignTask } = useAssignTask();
  const { mutate: removeTask } = useRemoveTask();
  const { usersViaAdmin: users } = useUsers();
  const userOptions = (users.data ?? []).map(user => ({
    value: user.id,
    label: user.nickname,
  }));
  const { text } = useLanguage();
  const tasksTableText = text.admin.tasksTable;

  return useMemo<ColumnDef<Task>[]>(
    () => [
      {
        header: tasksTableText.titleHeader,
        accessorKey: tasksTableText.titleKey,
      },
      {
        header: tasksTableText.statusHeader,
        cell: ({ row }) => (
          <FormSelect
            label=""
            options={STATUS_OPTIONS}
            value={row.original.status}
            onChange={e =>
              updateStatus({
                id: row.original.id,
                data: { status: e.target.value as TaskStatus },
              })
            }
          >
            {Object.entries(TASK_STATUS_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </FormSelect>
        ),
      },
      {
        header: tasksTableText.priorityHeader,
        cell: ({ row }) => TASK_PRIORITY_LABELS[row.original.priority],
      },
      {
        header: tasksTableText.assigneeHeader,
        cell: ({ row }) => (
          <FormSelect
            label=""
            options={userOptions}
            value={row.original.assignee?.id ?? ''}
            onChange={e => {
              if (e.target.value) {
                assignTask({
                  id: row.original.id,
                  data: { assigneeId: e.target.value },
                });
              }
            }}
          />
        ),
      },
      {
        header: tasksTableText.actionHeader,
        cell: ({ row }) => (
          <Button
            onClick={() => {
              if (window.confirm(tasksTableText.actionConfirm))
                removeTask(row.original.id);
            }}
          >
            {tasksTableText.actionBtn}
          </Button>
        ),
      },
    ],
    [updateStatus, assignTask, removeTask, tasksTableText, userOptions],
  );
};
