import { useQueryClient } from '@tanstack/react-query';
import { useAuthStore } from '../model';
import { useNavigate } from 'react-router';
import { tokenStorage } from '../lib';
import toast from 'react-hot-toast';

export const useLogout = () => {
  const queryClient = useQueryClient();
  const logout = useAuthStore(state => state.logout);
  const navigate = useNavigate();

  return () => {
    tokenStorage.remove();
    logout();
    queryClient.clear();
    navigate('/login');
    toast.success("You're logged out");
  };
};
