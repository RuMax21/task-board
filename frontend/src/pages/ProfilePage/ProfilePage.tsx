import { useAuthStore } from '@/features/Auth/model';
import { ChangePasswordForm } from '@/features/Auth/ui/ChangePasswordForm/ChangePasswordForm';
import { useLanguage } from '@/shared/i18n';
import type { ReactElement } from 'react';

export default function ProfilePage(): ReactElement {
  const { text } = useLanguage();
  const { user } = useAuthStore();

  return (
    <section>
      <h1>{text.profile.title}</h1>
      <p>
        {text.profile.nickname}: {user?.nickname}
      </p>
      <p>
        {text.profile.email}: {user?.email}
      </p>
      <p>
        {text.profile.role}: {user?.role}
      </p>
      <ChangePasswordForm />
    </section>
  );
}
