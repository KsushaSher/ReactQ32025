import type React from 'react';
import { Outlet } from 'react-router';
import { NavigationLinks } from '../../components/NavigationLinks';
import s from './Layout.module.scss';

const Layout: React.FC = () => {
  return (
    <>
      <header className={s.header}>
        <nav className={s.wrapper}>
          <NavigationLinks />
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
