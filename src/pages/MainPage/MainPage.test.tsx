import MainPage from './MainPage';
import { http, HttpResponse } from 'msw';
import { server } from '../../__tests__/mocks/node';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { consoleError } from '../../__tests__/mocks/mock';

describe('Error Handling Tests', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
    localStorage.clear();
    vi.restoreAllMocks();
  });

  afterEach(() => {
    consoleError.mockRestore();
  });

  it('Shows appropriate error for 500 status code', async () => {
    server.use(
      http.get('https://rickandmortyapi.com/api/character/', () => {
        return new HttpResponse(null, { status: 500 });
      })
    );

    render(<MainPage />);

    const buttonElement = screen.getByTestId('button-search');
    const inputElement = screen.getByRole('textbox');

    await user.type(inputElement, 'rick');
    await user.click(buttonElement);

    const errorElement = await screen.findByTestId('error');

    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent(/500/i);
  });

  it('shows appropriate error for 404 status code', async () => {
    server.use(
      http.get('https://rickandmortyapi.com/api/character/', () => {
        return new HttpResponse(null, { status: 404 });
      })
    );

    render(<MainPage />);

    const buttonElement = screen.getByTestId('button-search');
    const inputElement = screen.getByRole('textbox');

    await userEvent.type(inputElement, 'sdfsdf');
    await userEvent.click(buttonElement);

    const errorElement = await screen.findByTestId('error');

    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent('No results found');
  });
});
