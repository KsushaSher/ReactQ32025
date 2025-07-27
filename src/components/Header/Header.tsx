import React from 'react';
import s from './Header.module.scss';
import { NavigationLinks } from '../NavigationLinks';

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <NavigationLinks />
      </div>
    </header>
  );
};

export default Header;
