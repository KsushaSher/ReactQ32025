import { useEffect, type ReactNode } from 'react';
import ReactDOM from 'react-dom';
import s from './Modal.module.scss';
import '../../styles/main.scss';

interface Args {
  isShowing: boolean;
  hide: () => void;
  children: ReactNode;
}

const Modal = ({ isShowing, hide, children }: Args) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === 'Escape' ? hide() : null;

    document.body.addEventListener('keydown', closeOnEscapeKey);

    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [hide]);

  if (!isShowing) return null;

  const modalRoot = document.getElementById('modal');

  if (!modalRoot) return null;

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      hide();
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
            onClick={hide}
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
