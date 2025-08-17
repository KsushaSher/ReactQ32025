'use client';

import Link from 'next/link';
import { ROUTES } from '../../shared/constants/routes';
import s from './NavigationLinks.module.scss';
import { useTranslations } from 'next-intl';
import React from 'react';
import { usePathname } from '../../i18n/navigation';

const NavigationLinks = () => {
  const t = useTranslations();
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || pathname?.startsWith(href + '/');
  };

  return (
    <nav className={s.nav}>
      <Link
        href={ROUTES.ROOT}
        className={isActive(ROUTES.ROOT) ? `${s.link} ${s.active}` : s.link}
      >
        {t('mainPage.header.home')}
      </Link>
      <Link
        href={ROUTES.ABOUT}
        className={isActive(ROUTES.ABOUT) ? `${s.link} ${s.active}` : s.link}
        data-testid="about-link"
      >
        {t('mainPage.header.about')}
      </Link>
    </nav>
  );
};

export default NavigationLinks;
