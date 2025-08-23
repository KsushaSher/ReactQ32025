import { Link } from 'react-router-dom';
import { ROUTES } from '../../shared/constants';
import s from './Header.module.scss';
import '../../styles/main.scss';
import useModal from '../../utils/hooks/modal-state';
import Modal from '../Modal/Modal';
import UncontrolledForm from '../UncontrolledForm';
import ControlledForm from '../ControlledForm';
import { useState } from 'react';

const Header = () => {
  const [isShowing, toggle] = useModal();
  const [selectedForm, setSelectedForm] = useState<React.ReactNode>(null);

  return (
    <header className={s.header}>
      <Link
        className={s.link}
        to={ROUTES.FORMS.UNCONTROLLED}
        onClick={(e) => {
          e.preventDefault();
          setSelectedForm(<UncontrolledForm />);
          toggle();
        }}
      >
        Uncontrolled form
      </Link>
      <Link
        className={s.link}
        to={ROUTES.FORMS.CONTROLLED}
        onClick={(e) => {
          e.preventDefault();
          setSelectedForm(<ControlledForm />);
          toggle();
        }}
      >
        Controlled form
      </Link>

      <Modal isShowing={isShowing} hide={toggle}>
        {selectedForm}
      </Modal>
    </header>
  );
};

export default Header;
