import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import Layout from '../../pages/Layout';
import userEvent from '@testing-library/user-event';
import ThemeProvider from './Provider';

describe('Context component', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
    localStorage.clear();
  });

  it('should change the theme when you click on the button', async () => {
    render(
      <MemoryRouter initialEntries={['/character/1']}>
        <ThemeProvider>
          <Routes>
            <Route path="/character/:id" element={<Layout />} />
          </Routes>
        </ThemeProvider>
      </MemoryRouter>
    );

    const themeButton = await screen.getByTestId('theme-button');
    const wrapperApp = await screen.findByTestId('wrapper-app');

    await user.click(themeButton);
    expect(wrapperApp).toHaveClass('dark');
    await user.click(themeButton);
    expect(wrapperApp).toHaveClass('light');
  });
});
