import { useMutation, useQueryClient } from '@tanstack/react-query';
import { banUser, unbanUser } from '../api';
import type { UseUserModerationReturn } from './types';

export function useUserModeration(): UseUserModerationReturn {
  const queryClient = useQueryClient();

  const ban = useMutation({
    mutationFn: (userId: string) => banUser(userId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
  });

  const unban = useMutation({
    mutationFn: (userId: string) => unbanUser(userId),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['users'],
      }),
  });

  return { ban, unban };
}
