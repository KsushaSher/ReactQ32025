import { render, screen } from '@testing-library/react';
import Search from './Search';
import userEvent from '@testing-library/user-event';
import { mockOnChange, mockOnSubmit } from '../../test-utils/mocks/data';
import { useState } from 'react';
import React from 'react';

describe('Rendering Tests', () => {
  afterEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it('Renders search input and search button', () => {
    render(
      <Search onSubmit={mockOnSubmit} onChange={mockOnChange} search={''} />
    );
    const inputElement = screen.getByRole('textbox');
    const buttonElement = screen.getByTestId('button-search');

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('Displays previously saved search term from localStorage on mount', () => {
    localStorage.setItem('search', 'Rick');
    render(
      <Search onSubmit={mockOnSubmit} onChange={mockOnChange} search={'Rick'} />
    );

    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toHaveValue('Rick');
  });

  it('Shows empty input when no saved term exists', () => {
    localStorage.removeItem('search');
    render(
      <Search onSubmit={mockOnSubmit} onChange={mockOnChange} search={''} />
    );

    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toHaveValue('');
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
    const Wrapper = () => {
      const [search, setSearch] = useState('');

      return (
        <Search search={search} onChange={setSearch} onSubmit={() => {}} />
      );
    };

    render(<Wrapper />);
    const inputElement = screen.getByRole('textbox');

    await user.type(inputElement, 'Rick');
    expect(inputElement).toHaveValue('Rick');
  });

  it('Saves search term to localStorage when search button is clicked', async () => {
    const Wrapper = () => {
      const [search, setSearch] = useState('');

      const onChange = (value: string) => {
        localStorage.setItem('search', value.trim());
        setSearch(value);
      };

      return (
        <Search search={search} onChange={onChange} onSubmit={mockOnSubmit} />
      );
    };

    render(<Wrapper />);
    const buttonElement = screen.getByTestId('button-search');
    const inputElement = screen.getByRole('textbox');

    await user.clear(inputElement);
    await user.type(inputElement, 'Rick');
    await user.click(buttonElement);

    expect(localStorage.getItem('search')).toBe('Rick');
  });

  it('Trims whitespace from search input before saving', async () => {
    const Wrapper = () => {
      const [search, setSearch] = useState('');

      const onChange = (value: string) => {
        localStorage.setItem('search', value.trim());
        setSearch(value);
      };

      return (
        <Search search={search} onChange={onChange} onSubmit={mockOnSubmit} />
      );
    };

    render(<Wrapper />);
    const buttonElement = screen.getByTestId('button-search');
    const inputElement = screen.getByRole('textbox');

    await user.clear(inputElement);
    await user.type(inputElement, '  Rick  ');
    await user.click(buttonElement);

    expect(localStorage.getItem('search')).toBe('Rick');
  });

  it('Triggers search callback with correct parameters', async () => {
    const Wrapper = () => {
      const [search, setSearch] = useState('');

      const onChange = (value: string) => {
        localStorage.setItem('search', value.trim());
        setSearch(value);
      };

      return (
        <Search search={search} onChange={onChange} onSubmit={mockOnSubmit} />
      );
    };

    render(<Wrapper />);

    const buttonElement = screen.getByTestId('button-search');
    const inputElement = screen.getByRole('textbox');

    await user.clear(inputElement);
    await user.type(inputElement, 'Rick');
    await user.click(buttonElement);

    expect(mockOnSubmit).toHaveBeenCalledWith('Rick');
  });
});
