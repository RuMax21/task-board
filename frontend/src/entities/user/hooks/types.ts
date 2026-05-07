import type { UseQueryResult } from '@tanstack/react-query';
import type { User } from '../model';

export type UseUsersReturn = UseQueryResult<User[], Error>;
