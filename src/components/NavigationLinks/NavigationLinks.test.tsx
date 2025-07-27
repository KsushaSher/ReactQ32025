import { MemoryRouter, Route, Routes } from 'react-router';
import { render, screen } from '@testing-library/react';
import NavigationLinks from './NavigationLinks';
import userEvent from '@testing-library/user-event';

describe('NavigationLinks navigation', () => {
  it('navigates to About page on clicking About link', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={['/']}>
        <NavigationLinks />
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Home Page')).toBeInTheDocument();
    const aboutLink = screen.getByTestId('about-link');

    await user.click(aboutLink);
    expect(screen.getByText('About Page')).toBeInTheDocument();
  });
});
