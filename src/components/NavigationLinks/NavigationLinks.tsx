import Link from 'next/link';
import { ROUTES } from '../../shared/constants/routes';
import s from './NavigationLinks.module.scss';
import { useTranslations } from 'next-intl';
import React from 'react';

const NavigationLinks = () => {
  const t = useTranslations();

  return (
    <nav className={s.nav}>
      <Link
        href={ROUTES.ROOT}

        // className={({ isActive }) =>
        //   isActive ? `${s.link} ${s.active}` : s.link
        // }
      >
        {t('mainPage.header.home')}
      </Link>
      <Link
        href={ROUTES.ABOUT}
        // className={({ isActive }) =>
        //   isActive ? `${s.link} ${s.active}` : s.link
        // }
        data-testid="about-link"
      >
        {t('mainPage.header.about')}
      </Link>
    </nav>
  );
};

export default NavigationLinks;
