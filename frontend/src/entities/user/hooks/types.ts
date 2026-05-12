import type { UseMutateFunction, UseQueryResult } from '@tanstack/react-query';
import type { User, UserViaAdmin } from '../model';

export type UseUsersReturn = {
  usersViaAdmin: UseQueryResult<UserViaAdmin[], Error>;
  users: UseQueryResult<User[], Error>;
};
export type UseUserModerationReturn = {
  ban: UseMutateFunction<void, Error, string, unknown>;
  unban: UseMutateFunction<void, Error, string, unknown>;
};
