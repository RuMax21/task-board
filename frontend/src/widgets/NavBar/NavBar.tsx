import { useLogout } from '@/features/Auth/hooks/useLogout';
import { ROUTES } from '@/shared/config';
import { useLanguage } from '@/shared/i18n';
import { Button } from '@/shared/ui';
import type { ReactElement } from 'react';
import { Link } from 'react-router';

export function NavBar(): ReactElement {
  const { text } = useLanguage();
  const onLogout = useLogout();

  return (
    <nav>
      <Link to={ROUTES.TASKS}>{text.links.tasks}</Link>
      <Link to={ROUTES.PROFILE}>{text.links.profile}</Link>
      <Button onClick={onLogout}>{text.common.btn.logout}</Button>
    </nav>
  );
}
