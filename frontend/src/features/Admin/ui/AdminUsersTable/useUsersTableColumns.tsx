import type { ColumnDef } from '@tanstack/react-table';
import { useMemo } from 'react';
import type { UserViaAdmin } from '@/entities/user/model';
import { Button } from '@/shared/ui';
import { useUserModeration } from '@/entities/user/hooks/useUserModeration';
import { useLanguage } from '@/shared/i18n';

export const useUsersTableColumns = (): ColumnDef<UserViaAdmin>[] => {
  const { ban, unban } = useUserModeration();
  const { text } = useLanguage();
  const usersTableText = text.admin.usersTable;

  return useMemo<ColumnDef<UserViaAdmin>[]>(
    () => [
      {
        header: usersTableText.nicknameHeader,
        accessorKey: usersTableText.nicknameKey,
      },
      {
        header: usersTableText.emailHeader,
        accessorKey: usersTableText.emailKey,
      },
      {
        header: usersTableText.roleHeader,
        accessorKey: usersTableText.roleKey,
      },
      {
        header: usersTableText.statusHeader,
        cell: ({ row }) =>
          row.original.bannedAt
            ? usersTableText.statusCell.banned
            : usersTableText.statusCell.active,
      },
      {
        header: usersTableText.actionHeader,
        cell: ({ row }) =>
          row.original.bannedAt ? (
            <Button onClick={() => unban(row.original.id)}>
              {usersTableText.actionCell.unban}
            </Button>
          ) : (
            <Button onClick={() => ban(row.original.id)}>
              {usersTableText.actionCell.ban}
            </Button>
          ),
      },
    ],
    [ban, unban, usersTableText],
  );
};
