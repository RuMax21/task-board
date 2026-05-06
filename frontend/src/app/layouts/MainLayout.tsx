import { NavBar } from '@/widgets/NavBar';
import type { ReactElement } from 'react';
import { Outlet } from 'react-router';

export default function MainLayout(): ReactElement {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
