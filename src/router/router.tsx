import { createBrowserRouter } from 'react-router';
import NotFoundPage from '../pages/NotFoundPage';
import { ROUTES } from '../shared/constants/routes';
import MainPage from '../pages/MainPage';
import RouteErrorBoundary from '../components/RouteErrorBoundary';

const router = createBrowserRouter([
  {
    path: ROUTES.MAIN,
    Component: MainPage,
    ErrorBoundary: RouteErrorBoundary,
  },
  {
    path: ROUTES.NOT_FOUND,
    Component: NotFoundPage,
    ErrorBoundary: RouteErrorBoundary,
  },
]);

export default router;
