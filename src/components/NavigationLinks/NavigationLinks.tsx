import React from 'react';
import s from './NavigationLinks.module.scss';
import { NavLink } from 'react-router';

const NavigationLinks: React.FC = () => {
  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? `${s.link} ${s.active}` : s.link
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        end
        className={({ isActive }) =>
          isActive ? `${s.link} ${s.active}` : s.link
        }
        data-testid="about-link"
      >
        About
      </NavLink>
    </nav>
  );
};

export default NavigationLinks;
