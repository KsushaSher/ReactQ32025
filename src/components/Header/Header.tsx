import React from 'react';
import s from './Header.module.scss';
import { ErrorButton } from '../ErrorButton';

interface Props {
  children: React.ReactNode;
}

const Header: React.FC<Props> = ({ children }) => {
  return (
    <header className={s.header}>
      <div className={`${s.wrapper} ${s['wrapper-header']}`}>
        {children}
        <ErrorButton />
      </div>
    </header>
  );
};

export default Header;
