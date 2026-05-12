import { useQueryClient } from '@tanstack/react-query';
import { useAuthStore } from '../model';
import { useNavigate } from 'react-router';
import { tokenStorage } from '../lib';
import toast from 'react-hot-toast';
import { ROUTES } from '@/shared/config';
import { useLanguage } from '@/shared/i18n';

export const useLogout = () => {
  const queryClient = useQueryClient();
  const logout = useAuthStore(state => state.logout);
  const navigate = useNavigate();
  const { text } = useLanguage();

  return (): void => {
    tokenStorage.remove();
    logout();
    queryClient.clear();
    navigate(ROUTES.LOGIN);
    toast.success(text.success.logout);
  };
};
