import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';

describe('AboutPage', () => {
  const user = userEvent.setup();

  it('renders avatar image with correct alt text', () => {
    render(<AboutPage />);
    const avatar = screen.getByAltText(/avatar/i);

    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', expect.stringContaining('ava3.jpg'));
  });

  it('renders description text', () => {
    render(<AboutPage />);
    expect(
      screen.getByText(
        /Architectural and design thinking have always been part/i
      )
    ).toBeInTheDocument();
  });

  it('renders RSSchool logo with link', () => {
    render(<AboutPage />);
    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('href', 'https://rs.school/courses/reactjs');
    expect(link).toHaveAttribute('target', '_blank');

    const logo = screen.getByTestId('rs-logo');

    expect(logo).toHaveAttribute('src', expect.stringContaining('rss-logo'));
  });

  it('opens the RSSchool course link in a new tab', async () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <AboutPage />
      </MemoryRouter>
    );

    const logoImg = screen.getByTestId('rs-logo');
    const link = logoImg.closest('a');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://rs.school/courses/reactjs');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');

    await user.click(logoImg);
  });
});
