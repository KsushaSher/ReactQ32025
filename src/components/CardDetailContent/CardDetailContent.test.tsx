import { render, screen, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import CardDetail from '../CardDetail';
import { MemoryRouter, Route, Routes } from 'react-router';
import { server } from '../../test-utils/mocks/setup-server';
import { mockItem } from '../../test-utils/mocks/data';

describe('CardDetail Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('shows spinner while loading', async () => {
    render(
      <MemoryRouter initialEntries={['/character/1']}>
        <Routes>
          <Route path="/character/:id" element={<CardDetail />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByTestId('spinner')).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.queryByTestId('spinner')).not.toBeInTheDocument()
    );
  });

  it('displays character details correctly', async () => {
    render(
      <MemoryRouter initialEntries={['/character/1']}>
        <Routes>
          <Route path="/character/:id" element={<CardDetail />} />
        </Routes>
      </MemoryRouter>
    );

    const card = await screen.findByTestId('card-detail');

    expect(card).toBeInTheDocument();
    expect(screen.getByText(/Species:/i)).toHaveTextContent(mockItem.species);
    expect(screen.getByText(/Status:/i)).toHaveTextContent(mockItem.status);
    expect(screen.getByText(/Gender:/i)).toHaveTextContent(mockItem.gender);

    const image = screen.getByRole('img');

    expect(image).toHaveAttribute('src', mockItem.image);
    expect(image).toHaveAttribute(
      'alt',
      expect.stringContaining(mockItem.name)
    );
  });

  it('displays error message on failed fetch', async () => {
    server.use(
      http.get('https://rickandmortyapi.com/api/character/:id', () =>
        HttpResponse.error()
      )
    );

    render(
      <MemoryRouter initialEntries={['/character/1']}>
        <Routes>
          <Route path="/character/:id" element={<CardDetail />} />
        </Routes>
      </MemoryRouter>
    );

    const error = await screen.findByTestId('error');

    expect(error).toBeInTheDocument();
    expect(error).toHaveTextContent('Failed to fetch');
  });

  it('navigates back to main page when clicked outside', async () => {
    render(
      <MemoryRouter initialEntries={['/character/1?name=rick']}>
        <Routes>
          <Route path="/" element={<div data-testid="main-page" />} />
          <Route path="/character/:id" element={<CardDetail />} />
        </Routes>
      </MemoryRouter>
    );

    await screen.findByTestId('card-detail');

    document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

    await waitFor(() => {
      expect(screen.getByTestId('main-page')).toBeInTheDocument();
    });
  });
});
