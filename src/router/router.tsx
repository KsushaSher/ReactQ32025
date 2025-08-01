import { createBrowserRouter } from 'react-router';
import CardDetail from '../components/CardDetail';
import AboutPage from '../pages/AboutPage';
import Layout from '../pages/Layout';
import { MainPage } from '../pages/MainPage';
import NotFoundPage from '../pages/NotFoundPage';
import { ROUTES } from '../shared/constants/routes';

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    Component: Layout,
    children: [
      {
        path: ROUTES.MAIN,
        Component: MainPage,
        children: [
          {
            path: ROUTES.CHARACTER.DETAIL,
            Component: CardDetail,
          },
        ],
      },
      {
        path: ROUTES.ABOUT,
        Component: AboutPage,
      },
    ],
  },
  {
    path: ROUTES.NOT_FOUND,
    Component: NotFoundPage,
  },
]);

export default router;
