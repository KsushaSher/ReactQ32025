import { createBrowserRouter } from 'react-router';
import NotFoundPage from '../pages/NotFoundPage';
import { ROUTES } from '../shared/constants/routes';
import { ReactErrorBoundary } from '../components/ReactErrorBoundary/ReactErrorBoundary';
import MainPage from '../pages/MainPage';

const router = createBrowserRouter([
  {
    path: ROUTES.MAIN,
    Component: MainPage,
    ErrorBoundary: ReactErrorBoundary,
  },
  {
    path: ROUTES.NOT_FOUND,
    Component: NotFoundPage,
    ErrorBoundary: ReactErrorBoundary,
  },
]);

export default router;
