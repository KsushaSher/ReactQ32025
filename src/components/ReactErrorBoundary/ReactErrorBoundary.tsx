import { isRouteErrorResponse, useRouteError } from 'react-router';
import s from './ReactErrorBoundary.module.scss';
import { RouteError } from './RouteError';
import { ReactError } from './ReactError';

export const ReactErrorBoundary = () => {
  const error = useRouteError();

  return isRouteErrorResponse(error) ? (
    <RouteError error={error} />
  ) : error instanceof Error ? (
    <ReactError error={error} />
  ) : (
    <div className={s['wrapper-error-message']}>
      <h1>Unknown Error</h1>
    </div>
  );
};
