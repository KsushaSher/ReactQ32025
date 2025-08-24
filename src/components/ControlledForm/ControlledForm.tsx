import { useNavigate } from 'react-router-dom';
import '../../styles/main.scss';
import { ROUTES } from '../../shared/constants';
import Modal from '../Modal/Modal';

const ControlledForm = () => {
  const navigate = useNavigate();
  const onClose = () => navigate(ROUTES.MAIN);

  return (
    <Modal isShowing onClose={onClose}>
      <div>{'Сontrolled Form'}</div>
    </Modal>
  );
};

export default ControlledForm;
