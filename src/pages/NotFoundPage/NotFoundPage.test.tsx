import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import NotFoundPage from './NotFoundPage';
import { describe, expect, it } from 'vitest';

describe('NotFoundPage', () => {
  it('renders 404 heading and message', () => {
    render(
      <MemoryRouter initialEntries={['*']}>
        <NotFoundPage />
      </MemoryRouter>
    );

    expect(screen.getByText('Oops!')).toBeInTheDocument();
    expect(screen.getByText('404')).toBeInTheDocument();
  });

  it('renders link to home page', async () => {
    render(
      <MemoryRouter initialEntries={['*']}>
        <NotFoundPage />
      </MemoryRouter>
    );

    const link = await screen.findByTestId('link-to-home');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});
