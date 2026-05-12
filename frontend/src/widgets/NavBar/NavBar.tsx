import { Button } from '@/shared/ui';
import type { ReactElement } from 'react';
import { Link } from 'react-router';
import type { NavBarProps } from './types';

export function NavBar({
  links,
  onLogout,
  logoutText,
}: NavBarProps): ReactElement {
  return (
    <nav>
      {links.map(link => (
        <Link to={link.to}>{link.label}</Link>
      ))}
      <Button onClick={onLogout}>{logoutText}</Button>
    </nav>
  );
}
