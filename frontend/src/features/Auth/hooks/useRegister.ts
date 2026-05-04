import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { useAuthStore, type RegisterRequest } from '../model';
import { register } from '../api';
import { mapJwtToUser, parseJwt, tokenStorage } from '../lib';
import type { UseRegisterReturn } from './types';

export const useRegister = (): UseRegisterReturn => {
  const queryClient = useQueryClient();
  const setUser = useAuthStore(state => state.setUser);
  const navigate = useNavigate();

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
      toast.success('Successful registration');
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
