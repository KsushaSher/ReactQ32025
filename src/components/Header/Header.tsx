import { Link } from 'react-router-dom';
import { ROUTES } from '../../shared/constants';
import s from './Header.module.scss';
import '../../styles/main.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <Link className={s.link} to={ROUTES.FORMS.UNCONTROLLED}>
        Uncontrolled form
      </Link>
      <Link className={s.link} to={ROUTES.FORMS.CONTROLLED}>
        Controlled form
      </Link>
    </header>
  );
};

export default Header;
