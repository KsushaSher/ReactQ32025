import Link from 'next/link';
import s from './NotFoundPage.module.scss';
import { ROUTES } from '../../shared/constants/routes';

const NotFoundPage = () => {
  return (
    <div className={`${s['error-page']} light`} data-testid="not-found">
      <h1>Oops!</h1>
      <div className={s.error404}>404</div>
      <div>Sorry, but no such page was found.</div>
      <Link className={s.link} href={ROUTES.ROOT} data-testid="link-to-home">
        Return to home
      </Link>
    </div>
  );
};

export default NotFoundPage;
