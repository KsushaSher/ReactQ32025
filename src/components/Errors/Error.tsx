'use client';

import { useTranslations } from 'next-intl';
import React from 'react';
import { Link } from '../../i18n/navigation';
import { ROUTES } from '../../shared/constants/routes';
import s from './Error.module.scss';

export const Error = ({ error }: { error?: Error & { digest?: string } }) => {
  const t = useTranslations();

  return (
    <div className={s['error-message-wrapper']}>
      <h2>{t('errors.title')}</h2>
      <details className={s.details}>
        {<summary>{t('errors.details')}</summary>}
        {error?.message && <pre>{error?.message}</pre>}
        {error?.digest && <pre>{error?.digest}</pre>}
      </details>
      <Link href={{ pathname: ROUTES.ROOT }}>{t('errors.homeButton')}</Link>
    </div>
  );
};
export default Error;
