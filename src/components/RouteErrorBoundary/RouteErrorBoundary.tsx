import { isRouteErrorResponse, useRouteError } from 'react-router';
import s from './RouteErrorBoundary.module.scss';

const RouteErrorBoundary = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className={s['error-wrapper']}>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div className={s['error-wrapper']}>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1 className={s['error-wrapper']}>Unknown Error</h1>;
  }
};

export default RouteErrorBoundary;
