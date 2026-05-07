import { Button, FormField } from '@/shared/ui';
import type { ReactElement } from 'react';
import { useChangePasswordForm } from './useChangePasswordForm';
import { useLanguage } from '@/shared/i18n';

export function ChangePasswordForm(): ReactElement {
  const { text } = useLanguage();
  const { onSubmit, isPending, form } = useChangePasswordForm();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} method="patch">
      <h2>{text.changePassword.title}</h2>
      <FormField
        label={text.changePassword.currentPasswordLabel}
        placeholder={text.changePassword.currentPasswordPlaceholder}
        error={errors.currentPassword}
        {...register('currentPassword')}
      />
      <FormField
        label={text.changePassword.newPasswordLabel}
        placeholder={text.changePassword.newPasswordPlaceholder}
        error={errors.newPassword}
        {...register('newPassword')}
      />
      <Button type="submit">
        {isPending
          ? text.common.processing.changePassword
          : text.common.btn.changePassword}
      </Button>
    </form>
  );
}
