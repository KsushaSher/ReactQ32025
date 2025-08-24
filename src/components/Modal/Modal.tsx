import { useEffect, type ReactNode } from 'react';
import ReactDOM from 'react-dom';
import s from './Modal.module.scss';
import '../../styles/main.scss';

interface Args {
  isShowing: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isShowing, onClose, children }: Args) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === 'Escape' ? onClose() : null;

    document.body.addEventListener('keydown', closeOnEscapeKey);

    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [onClose]);

  if (!isShowing) return null;

  const modalRoot = document.getElementById('modal');

  if (!modalRoot) return null;

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div
      className={`${s['modal-wrapper']} light`}
      onClick={handleClickOutside}
      tabIndex={-1}
    >
      <div className={s.modal}>
        <div className={s['modal-header']}>
          <button
            type="button"
            className={s['modal-close-button']}
            onClick={onClose}
          >
            <span>&times;</span>
          </button>
        </div>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
