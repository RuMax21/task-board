import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../api';
import type { UseUsersReturn } from './types';

export function useUsers(): UseUsersReturn {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });
}
