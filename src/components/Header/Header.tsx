import LanguageButton from '../LanguageButton';
import { NavigationLinks } from '../NavigationLinks';
import ThemeButton from '../ThemeButton';
import s from '../../pageComponents/Layout/Layout.module.scss';
import React from 'react';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <nav className={s.wrapper}>
          <NavigationLinks />
        </nav>
        <ThemeButton />
        <LanguageButton />
      </div>
    </header>
  );
};

export default Header;
