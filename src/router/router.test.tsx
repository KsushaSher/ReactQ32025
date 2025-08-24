import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { store } from '../store/store';
import { ROUTES } from '../shared/constants';
import router from '../router';
import { describe, expect, it } from 'vitest';

const renderWithProviders = (ui: React.ReactNode) => {
  return render(<Provider store={store}>{ui}</Provider>);
};

describe('App Router', () => {
  it('should render MainPage at root route', async () => {
    const testRouter = createMemoryRouter(router.routes, {
      initialEntries: [ROUTES.MAIN],
    });

    renderWithProviders(<RouterProvider router={testRouter} />);

    const wrapperApp = await screen.findByTestId('wrapper-app');

    expect(wrapperApp).toBeInTheDocument();
  });
});
