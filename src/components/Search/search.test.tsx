import { render, screen } from '@testing-library/react';
import Search from './Search';
import userEvent from '@testing-library/user-event';
import { mockOnSubmit } from '../../__tests__/mocks/mock';

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

describe('User Interaction Tests', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it('Updates input value when user types', async () => {
    render(<Search onSubmit={mockOnSubmit} />);
    const inputElement = screen.getByRole('textbox');

    await user.type(inputElement, 'Rick');
    expect(inputElement).toHaveValue('Rick');
  });

  it('Saves search term to localStorage when search button is clicked', async () => {
    render(<Search onSubmit={mockOnSubmit} />);
    const buttonElement = screen.getByTestId('button-search');
    const inputElement = screen.getByRole('textbox');

    await user.clear(inputElement);
    await user.type(inputElement, 'Rick');
    await user.click(buttonElement);

    expect(localStorage.getItem('search')).toBe('Rick');
  });

  it('Trims whitespace from search input before saving', async () => {
    render(<Search onSubmit={mockOnSubmit} />);
    const buttonElement = screen.getByTestId('button-search');
    const inputElement = screen.getByRole('textbox');

    await user.clear(inputElement);
    await user.type(inputElement, '  Rick  ');
    await user.click(buttonElement);

    expect(localStorage.getItem('search')).toBe('Rick');
  });

  it('Triggers search callback with correct parameters', async () => {
    render(<Search onSubmit={mockOnSubmit} />);

    const buttonElement = screen.getByTestId('button-search');
    const inputElement = screen.getByRole('textbox');

    await user.clear(inputElement);
    await user.type(inputElement, 'Rick');
    await user.click(buttonElement);

    expect(mockOnSubmit).toHaveBeenCalledWith('Rick');
  });
});

describe('LocalStorage Integration', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it('Retrieves saved search term on component mount', async () => {
    localStorage.setItem('search', 'Rick');

    render(<Search onSubmit={mockOnSubmit} />);
    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toHaveValue('Rick');
    expect(mockOnSubmit).toHaveBeenCalledWith('Rick');
  });

  it('Overwrites existing localStorage value when new search is performed', async () => {
    localStorage.setItem('search', 'Rick');
    user = userEvent.setup();

    render(<Search onSubmit={mockOnSubmit} />);
    const buttonElement = screen.getByTestId('button-search');
    const inputElement = screen.getByRole('textbox');

    await user.clear(inputElement);
    await user.type(inputElement, 'Morty');
    await user.click(buttonElement);

    expect(localStorage.getItem('search')).toBe('Morty');
  });
});
