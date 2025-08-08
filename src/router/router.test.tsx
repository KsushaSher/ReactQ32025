import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router';
import router from '../router/router';
import { ROUTES } from '../shared/constants/routes';
import ThemeProvider from '../components/Context';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const renderWithProviders = (ui: React.ReactNode) => {
  return render(
    <Provider store={store}>
      <ThemeProvider>{ui}</ThemeProvider>
    </Provider>
  );
};

describe('App Router', () => {
  it('should render MainPage at root route', async () => {
    const testRouter = createMemoryRouter(router.routes, {
      initialEntries: [ROUTES.ROOT],
    });

    renderWithProviders(<RouterProvider router={testRouter} />);

    const mainPage = await screen.findByTestId('wrapper-app');

    expect(mainPage).toBeInTheDocument();
  });

  it('should render AboutPage at /about', async () => {
    const testRouter = createMemoryRouter(router.routes, {
      initialEntries: [ROUTES.ABOUT],
    });

    renderWithProviders(<RouterProvider router={testRouter} />);

    const aboutPage = await screen.findByTestId('about-page');

    expect(aboutPage).toBeInTheDocument();
  });
});
