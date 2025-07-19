import MainPage from './MainPage';
import { http, HttpResponse } from 'msw';
import { server } from '../../__tests__/mocks/node';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Error Handling Tests', () => {
  let user: ReturnType<typeof userEvent.setup>;
  let consoleErrorMock: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleErrorMock = vi.spyOn(console, 'error').mockImplementation(() => {});
    user = userEvent.setup();
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

    render(<MainPage />);

    const buttonElement = screen.getByTestId('button-search');
    const inputElement = screen.getByRole('textbox');

    await user.type(inputElement, 'rick');
    await user.click(buttonElement);

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

    render(<MainPage />);

    const buttonElement = screen.getByTestId('button-search');
    const inputElement = screen.getByRole('textbox');

    await userEvent.type(inputElement, 'sdfsdf');
    await userEvent.click(buttonElement);

    const errorElement = await screen.findByTestId('error');

    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent('No results found');
  });

  it('Displays the spinner and characters after a successful search', async () => {
    render(<MainPage />);

    const buttonElement = screen.getByTestId('button-search');
    const inputElement = screen.getByRole('textbox');

    await userEvent.type(inputElement, 'rick');
    await userEvent.click(buttonElement);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByTestId('card')).toBeInTheDocument();
      expect(screen.getByText(/Rick Sanchez/i)).toBeInTheDocument();
    });

    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
  });
});
