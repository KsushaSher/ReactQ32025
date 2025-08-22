import { createBrowserRouter } from 'react-router';
import NotFoundPage from '../pages/NotFoundPage';
import { ROUTES } from '../shared/constants/routes';
import { ReactErrorBoundary } from '../components/ReactErrorBoundary/ReactErrorBoundary';
import MainPage from '../pages/MainPage';
import UncontrolledForm from '../components/UncontrolledForm';
import ControlledForm from '../components/ControlledForm';

const router = createBrowserRouter([
  {
    path: ROUTES.MAIN,
    Component: MainPage,
    ErrorBoundary: ReactErrorBoundary,
    children: [
      {
        path: ROUTES.FORMS.UNCONTROLLED,
        Component: UncontrolledForm,
      },
      {
        path: ROUTES.FORMS.CONTROLLED,
        Component: ControlledForm,
      },
    ],
  },
  {
    path: ROUTES.NOT_FOUND,
    Component: NotFoundPage,
    ErrorBoundary: ReactErrorBoundary,
  },
]);

export default router;
