import type { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import type { User, UserViaAdmin } from '../model';

export type UseUsersReturn = {
  usersViaAdmin: UseQueryResult<UserViaAdmin[], Error>;
  users: UseQueryResult<User[], Error>;
};
export type UseUserModerationReturn = {
  ban: UseMutationResult<void, Error, string, unknown>;
  unban: UseMutationResult<void, Error, string, unknown>;
};
