import { render, screen } from '@testing-library/react';
import Search from './Search';

const mockOnSubmit = vi.fn();

describe('Rendering Tests', () => {
  afterEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it('Renders search input and search button', () => {
    render(<Search onSubmit={mockOnSubmit} />);
    const inputElement = screen.getByRole('textbox');
    const buttonElement = screen.getByTestId('button-search');

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('Displays previously saved search term from localStorage on mount', () => {
    localStorage.setItem('search', 'Rick');
    render(<Search onSubmit={mockOnSubmit} />);

    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toHaveValue('Rick');
    expect(mockOnSubmit).toBeCalledWith('Rick');
  });

  it('Shows empty input when no saved term exists', () => {
    localStorage.removeItem('search');
    render(<Search onSubmit={mockOnSubmit} />);

    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toHaveValue('');
    expect(mockOnSubmit).toBeCalledWith('');
  });
});
