import { useUsers } from '@/entities/user/hooks/useUsers';
import type { UseAssigneeOptionsReturn } from './types';

export function useAssigneeOptions(): UseAssigneeOptionsReturn[] {
  const { users } = useUsers();
  return [
    { value: '', label: 'Not assigned' },
    ...(users.data?.map(user => ({
      value: user.id,
      label: user.nickname,
    })) ?? []),
  ];
}
