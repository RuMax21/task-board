import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRegister } from '../../hooks';
import { registerSchema, type RegisterFormData } from '../../model';
import { zodResolver } from '@hookform/resolvers/zod';
import { ROUTES } from '@/shared/config';
import type { UseRegisterFormReturn } from './types';

export function useRegisterForm(): UseRegisterFormReturn {
  const { mutateAsync: register } = useRegister();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      nickname: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: RegisterFormData): Promise<void> => {
    setError(null);
    setIsLoading(true);

    try {
      await register(data);
      navigate(ROUTES.TASKS);
    } catch (error: unknown) {
      setError(error.response?.data?.message || 'Register error');
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
