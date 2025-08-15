import Link from 'next/link';
import { ROUTES } from '../../shared/constants/routes';
import s from './NavigationLinks.module.scss';

const NavigationLinks = () => {
  return (
    <nav className={s.nav}>
      <Link
        href={ROUTES.ROOT}
        // to={ROUTES.ROOT}
        // end
        // className={({ isActive }) =>
        //   isActive ? `${s.link} ${s.active}` : s.link
        // }
      >
        Home
      </Link>
      <Link
        href={ROUTES.ABOUT}
        // to={ROUTES.ABOUT}
        // end
        // className={({ isActive }) =>
        //   isActive ? `${s.link} ${s.active}` : s.link
        // }
        data-testid="about-link"
      >
        About
      </Link>
    </nav>
  );
};

export default NavigationLinks;
