import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { useAuthStore, type RegisterRequest } from '../model';
import { register } from '../api';
import { mapJwtToUser, parseJwt, tokenStorage } from '../lib';
import type { UseRegisterReturn } from './types';
import { useLanguage } from '@/shared/i18n';

export const useRegister = (): UseRegisterReturn => {
  const queryClient = useQueryClient();
  const setUser = useAuthStore(state => state.setUser);
  const navigate = useNavigate();
  const { text } = useLanguage();

  return useMutation({
    mutationFn: (data: RegisterRequest) => register(data),
    onSuccess: response => {
      const token = response.accessToken;
      tokenStorage.set(token);

      const jwtPayload = parseJwt(token);
      if (jwtPayload) {
        const user = mapJwtToUser(jwtPayload);
        setUser(user);
      }
      queryClient.clear();
      toast.success(text.success.signup);
      navigate('/');
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        const message = error.response?.data?.message || 'Registration error';
        toast.error(message);
      }
    },
  });
};
