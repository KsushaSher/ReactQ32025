import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import s from './Modal.module.scss';
import '../../styles/main.scss';
import { ModalContent } from './ModalContent';
import type { AdditionalColumns } from '../../store/slices/uiSlice';
import { useAppSelector } from '../../store/hooks';
import { selectColumns } from '../../store/selectors/ui.selectors';

interface Args {
  onClose?: (selectedColumns?: AdditionalColumns[]) => void;
}

const Modal = ({ onClose }: Args) => {
  const modalRoot = document.getElementById('modal');
  const initialColumns = useAppSelector(selectColumns);
  const [selectedColumns, setSelectedColumns] = useState(initialColumns);

  const handleSave = () => onClose?.(selectedColumns);
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === 'Escape' ? onClose?.() : null;

    document.body.addEventListener('keydown', closeOnEscapeKey);

    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [onClose]);

  if (!modalRoot) return null;

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
            onClick={() => onClose?.()}
          >
            <span>&times;</span>
          </button>
        </div>
        <ModalContent
          selectedColumns={selectedColumns}
          setSelectedColumns={setSelectedColumns}
        />
        <button
          type="button"
          className="button light-btn"
          style={{ marginTop: '16px' }}
          onClick={handleSave}
        >
          {'save'}
        </button>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
