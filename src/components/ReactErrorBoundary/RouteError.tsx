import type { ErrorResponse } from 'react-router';
import { ROUTES } from '../../shared/constants/routes';
import s from './ReactErrorBoundary.module.scss';

interface RouteErrorProps {
  error: ErrorResponse;
}

export const RouteError = ({ error }: RouteErrorProps) => {
  return (
    <div className={`${s['error-message-wrapper']} light`}>
      <h2>Something went wrong...</h2>
      <details className={s.details}>
        {<summary>Details</summary>}
        {error.status} {error.statusText}
        <br />
        {error.data}
      </details>
      <a href={ROUTES.ROOT}>Home</a>
    </div>
  );
};
