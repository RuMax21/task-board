import { ROUTES } from '@/shared/config';
import { Button, FormField } from '@/shared/ui';
import { Link } from 'react-router';
import { useLoginForm } from './useLoginForm';

export function LoginForm() {
  const { form, onSubmit, error, isLoading } = useLoginForm();
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
        label="Password"
        type="password"
        placeholder="••••••••"
        error={errors.password}
        {...register('password')}
      />

      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Login...' : 'Login'}
      </Button>

      <p>
        Don't have an account yet?
        <Link to={ROUTES.REGISTER}>Sign In</Link>
      </p>
    </form>
  );
}
