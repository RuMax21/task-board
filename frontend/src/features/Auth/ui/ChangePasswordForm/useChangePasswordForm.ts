import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { changePasswordSchema, type ChangePasswordFormData } from '../../model';
import { useState } from 'react';
import { useLanguage } from '@/shared/i18n';
import type { UseChangePasswordFormReturn } from './types';
import { useChangePassword } from '../../hooks';

export function useChangePasswordForm(): UseChangePasswordFormReturn {
  const { text } = useLanguage();
  const { mutateAsync: changePassword, isPending } = useChangePassword();
  const [errors, setErrors] = useState<string | null>(null);

  const form = useForm<ChangePasswordFormData>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
    },
  });

  const onSubmit = async (data: ChangePasswordFormData): Promise<void> => {
    setErrors(null);
    try {
      await changePassword(data);
      form.reset();
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrors(error.response?.data?.message || text.error.changePassword);
      }
    }
  };

  return {
    onSubmit,
    isPending,
    form,
    errors,
  };
}
