import { ROUTES } from '../../shared/constants/apiRoutes';
import s from './NavigationLinks.module.scss';
import { NavLink } from 'react-router';

const NavigationLinks = () => {
  return (
    <nav className={s.nav}>
      <NavLink
        to={ROUTES.ROOT}
        end
        className={({ isActive }) =>
          isActive ? `${s.link} ${s.active}` : s.link
        }
      >
        Home
      </NavLink>
      <NavLink
        to={ROUTES.ABOUT}
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
