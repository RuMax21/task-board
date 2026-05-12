import { useMutation } from '@tanstack/react-query';
import type { ChangePasswordRequest } from '../model';
import { changePassword } from '../api';
import type { UseChangePasswordReturn } from './types';

export const useChangePassword = (): UseChangePasswordReturn => {
  return useMutation({
    mutationFn: (data: ChangePasswordRequest) => changePassword(data),
  });
};
