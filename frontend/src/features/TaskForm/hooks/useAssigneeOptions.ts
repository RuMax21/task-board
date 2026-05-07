import { useUsers } from '@/entities/user/hooks/useUsers';
import type { UseAssigneeOptionsReturn } from './types';

export function useAssigneeOptions(): UseAssigneeOptionsReturn[] {
  const { data: users } = useUsers();
  return [
    { value: '', label: 'Not assigned' },
    ...(users?.map(user => ({
      value: user.id,
      label: user.nickname,
    })) ?? []),
  ];
}
