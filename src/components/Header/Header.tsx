import { Link } from 'react-router-dom';
import { ROUTES } from '../../shared/constants';
import s from './Header.module.scss';
import '../../styles/main.scss';
import useModal from '../../utils/hooks/modal-state';
import Modal from '../Modal/Modal';
import UncontrolledForm from '../UncontrolledForm';

const Header = () => {
  const [isShowing, toggle] = useModal();

  return (
    <header className={s.header}>
      <Link className={s.link} to={ROUTES.FORMS.UNCONTROLLED} onClick={toggle}>
        Uncontrolled form
      </Link>
      <Link className={s.link} to={ROUTES.FORMS.CONTROLLED}>
        Controlled form
      </Link>

      <Modal isShowing={isShowing} hide={toggle}>
        {<UncontrolledForm />}
      </Modal>
    </header>
  );
};

export default Header;
