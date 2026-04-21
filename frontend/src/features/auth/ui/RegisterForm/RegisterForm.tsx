import { Link } from 'react-router';
import { Button, FormField } from '@/shared/ui';
import { useRegisterForm } from './useRegisterForm';
import { ROUTES } from '@/shared/config';

export function RegisterForm() {
  const { form, onSubmit, error, isLoading } = useRegisterForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} method="post">
      <FormField
        label="Nickname"
        placeholder="nickname"
        error={errors.nickname}
        {...register('nickname')}
      />

      <FormField
        label="Email"
        placeholder="example@gmail.com"
        error={errors.email}
        {...register('email')}
      />

      <FormField
        label="Password"
        placeholder="••••••••"
        error={errors.password}
        {...register('password')}
      />

      <FormField
        label="Confirm password"
        placeholder="••••••••"
        error={errors.confirmPassword}
        {...register('confirmPassword')}
      />

      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Register...' : 'Register'}
      </Button>

      <p>
        Already have an account?
        <Link to={ROUTES.LOGIN}>Sign Up</Link>
      </p>
    </form>
  );
}
