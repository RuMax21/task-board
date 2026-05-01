import { useNavigate } from 'react-router';
import { useLogin } from '../../hooks';
import { useForm } from 'react-hook-form';
import { loginSchema, type LoginFormData } from '../../model';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { ROUTES } from '@/shared/config';
import type { UseLoginFormReturn } from './types';

export function useLoginForm(): UseLoginFormReturn {
  const { mutateAsync: login } = useLogin();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      nickname: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginFormData): Promise<void> => {
    setError(null);
    setIsLoading(true);

    try {
      await login(data);
      navigate(ROUTES.TASKS);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.response?.data?.message || 'Login error');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    onSubmit,
    error,
    isLoading,
  };
}
