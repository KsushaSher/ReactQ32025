import React, { type ReactNode } from 'react';
import ReactDOM from 'react-dom';
import s from './Modal.module.scss';
import '../../styles/main.scss';

interface Args {
  isShowing: boolean;
  hide: () => void;
  children: ReactNode;
}

const Modal = ({ isShowing, hide, children }: Args) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className={s['modal-overlay']} />
          <div
            className={s['modal-wrapper']}
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className={s.modal}>
              <div className={s['modal-header']}>
                <button
                  type="button"
                  className={s['modal-close-button']}
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <p>{"Hello, I'm a modal."}</p>
              {children}
            </div>
          </div>
        </React.Fragment>,
        document.getElementById('modal') || document.body
      )
    : null;

export default Modal;
