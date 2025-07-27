import { Link } from 'react-router';
import s from './NotFoundPage.module.scss';

const NotFoundPage: React.FC = () => {
  return (
    <div className={s['error-page']}>
      <h1>Oops!</h1>
      <div className={s.error404}>404</div>
      <div>Sorry, but no such page was found.</div>
      <Link className={s.link} to="/" data-testid="link-to-home">
        Return to home
      </Link>
    </div>
  );
};

export default NotFoundPage;
