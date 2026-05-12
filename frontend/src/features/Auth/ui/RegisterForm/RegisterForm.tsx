import { Link } from 'react-router';
import { Button, FormField } from '@/shared/ui';
import { useRegisterForm } from './useRegisterForm';
import { ROUTES } from '@/shared/config';
import type { ReactElement } from 'react';
import { useLanguage } from '@/shared/i18n';
import styles from '../AuthForm.module.scss';

export function RegisterForm(): ReactElement {
  const { text } = useLanguage();
  const { form, onSubmit, error, isLoading } = useRegisterForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      method="post"
      className={styles.form}
    >
      <FormField
        label={text.auth.form.nicknameLabel}
        placeholder={text.auth.form.nicknamePlaceholder}
        error={errors.nickname}
        {...register('nickname')}
      />

      <FormField
        label={text.auth.form.emailLabel}
        placeholder={text.auth.form.emailPlaceholder}
        error={errors.email}
        {...register('email')}
      />

      <FormField
        label={text.auth.form.passwordLabel}
        placeholder={text.auth.form.passwordPlaceholder}
        error={errors.password}
        type="password"
        {...register('password')}
      />

      <FormField
        label={text.auth.form.confirmPasswordLabel}
        placeholder={text.auth.form.passwordPlaceholder}
        error={errors.confirmPassword}
        type="password"
        {...register('confirmPassword')}
      />

      <Button type="submit" disabled={isLoading} className={styles.submitBtn}>
        {isLoading
          ? text.common.processing.registering
          : text.common.btn.register}
      </Button>

      <p className={styles.footer}>
        {text.auth.haveAccount}
        <Link to={ROUTES.LOGIN}>{text.auth.login}</Link>
      </p>
    </form>
  );
}
