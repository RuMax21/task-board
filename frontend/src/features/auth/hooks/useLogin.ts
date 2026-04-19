import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { useAuthStore, type LoginRequest } from '../model';
import { login } from '../api';
import { mapJwtToUser, parseJwt, tokenStorage } from '../lib';

export const useLogin = () => {
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
    onError: (error: any) => {
      const message = error.response?.data?.message || 'Login error';
      toast.error(message);
    },
  });
};
