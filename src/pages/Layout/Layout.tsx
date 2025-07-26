import type React from 'react';
import { Link, Outlet } from 'react-router';

const Layout: React.FC = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
