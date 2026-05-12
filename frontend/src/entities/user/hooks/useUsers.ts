import { useQuery } from '@tanstack/react-query';
import { getUsers, getUsersViaAdmin } from '../api';
import type { UseUsersReturn } from './types';

export function useUsers(): UseUsersReturn {
  const usersViaAdmin = useQuery({
    queryKey: ['admin', 'users'],
    queryFn: getUsersViaAdmin,
  });

  const users = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  return {
    usersViaAdmin,
    users,
  };
}
