import MainPage from './MainPage';
import { http, HttpResponse } from 'msw';
import { server } from '../../test-utils/mocks/setup-server';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('Error Handling Tests', () => {
  let consoleErrorMock: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleErrorMock = vi.spyOn(console, 'error').mockImplementation(() => {});
    localStorage.clear();
  });

  afterEach(() => {
    consoleErrorMock.mockRestore();
  });

  it('Shows appropriate error for 500 status code', async () => {
    server.use(
      http.get('https://rickandmortyapi.com/api/character/', () => {
        return new HttpResponse(null, { status: 500 });
      })
    );

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <MainPage />
        </MemoryRouter>
      </Provider>
    );

    const errorElement = await screen.findByTestId('error');

    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent(/500/i);
  });

  it('Shows appropriate error for 404 status code', async () => {
    server.use(
      http.get('https://rickandmortyapi.com/api/character/', () => {
        return new HttpResponse(null, { status: 404 });
      })
    );

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <MainPage />
        </MemoryRouter>
      </Provider>
    );

    const errorElement = await screen.findByTestId('error');

    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent('No results found');
  });

  it('Displays the spinner and characters after a successful search', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <MainPage />
        </MemoryRouter>
      </Provider>
    );

    const buttonElement = await screen.findByTestId('button-search');
    const inputElement = await screen.findByRole('textbox');

    await userEvent.type(inputElement, 'rick');
    await userEvent.click(buttonElement);

    expect(await screen.findByTestId('spinner')).toBeInTheDocument();
    await waitFor(async () => {
      expect(await screen.findByTestId('card')).toBeInTheDocument();
      expect(await screen.findByText(/Rick Sanchez/i)).toBeInTheDocument();
    });

    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
  });
});
