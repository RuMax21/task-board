import { ROUTES } from '@/shared/config';
import { Button, FormField } from '@/shared/ui';
import { Link } from 'react-router';
import { useLoginForm } from './useLoginForm';
import type { ReactElement } from 'react';
import { useLanguage } from '@/shared/i18n';

export function LoginForm(): ReactElement {
  const { text } = useLanguage();
  const { form, onSubmit, error, isLoading } = useLoginForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} method="post">
      <FormField
        label={text.auth.form.nicknameLabel}
        placeholder={text.auth.form.nicknamePlaceholder}
        error={errors.nickname}
        {...register('nickname')}
      />

      <FormField
        label={text.auth.form.passwordLabel}
        type="password"
        placeholder={text.auth.form.passwordPlaceholder}
        error={errors.password}
        {...register('password')}
      />

      <Button type="submit" disabled={isLoading}>
        {isLoading ? text.common.processing.logining : text.common.btn.login}
      </Button>

      <p>
        {text.auth.dontHaveAccount}
        <Link to={ROUTES.REGISTER}>{text.auth.signup}</Link>
      </p>
    </form>
  );
}
