import s from './NotFoundPage.module.scss';
import { ROUTES } from '../../shared/constants/routes';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const NotFoundPage = () => {
  const t = useTranslations();

  return (
    <div className={`${s['error-page']} light`} data-testid="not-found">
      <h1>{t('errors.ops')}</h1>
      <div className={s.error404}>404</div>
      <div>{t('errors.sorry')}</div>
      <Link className={s.link} href={ROUTES.ROOT} data-testid="link-to-home">
        {t('errors.homeButton')}
      </Link>
    </div>
  );
};

export default NotFoundPage;
