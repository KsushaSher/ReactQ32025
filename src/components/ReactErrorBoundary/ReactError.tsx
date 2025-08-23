import { ROUTES } from '../../shared/constants/routes';
import s from './ReactErrorBoundary.module.scss';

interface ReactError {
  error: Error;
}

export const ReactError = ({ error }: ReactError) => {
  return (
    <div className={`${s['error-message-wrapper']} light`}>
      <h2>Something went wrong...</h2>
      <details className={s.details}>
        {<summary>Details</summary>}
        <p>{error.message}</p>
        <br />
        <p>The stack trace is:</p>
        <p>{error.stack}</p>
      </details>
      <a href={ROUTES.MAIN}>Home</a>
    </div>
  );
};
