import { Button } from '@/shared/ui';
import type { ReactElement } from 'react';
import { Link } from 'react-router';
import type { NavBarProps } from './types';
import styles from './NavBar.module.scss';

export function NavBar({
  links,
  onLogout,
  logoutText,
}: NavBarProps): ReactElement {
  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        {links.map(link => (
          <Link key={link.to} to={link.to} className={styles.link}>
            {link.label}
          </Link>
        ))}
      </div>
      <Button onClick={onLogout}>{logoutText}</Button>
    </nav>
  );
}
