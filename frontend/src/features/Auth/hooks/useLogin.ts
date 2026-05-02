import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { useAuthStore, type LoginRequest } from '../model';
import { login } from '../api';
import { mapJwtToUser, parseJwt, tokenStorage } from '../lib';
import type { UseLoginReturn } from './types';

export const useLogin = (): UseLoginReturn => {
  const queryClient = useQueryClient();
  const setUser = useAuthStore(state => state.setUser);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: LoginRequest) => login(data),
    onSuccess: response => {
      const token = response.accessToken;
      tokenStorage.set(token);

      const jwtPayload = parseJwt(token);
      if (jwtPayload) {
        const user = mapJwtToUser(jwtPayload);
        setUser(user);
      }
      queryClient.clear();
      toast.success('Successful login');
      navigate('/');
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        const message = error.response?.data?.message || 'Login error';
        toast.error(message);
      }
    },
  });
};
