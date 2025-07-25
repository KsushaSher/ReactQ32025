import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ErrorButton from './ErrorButton';
import '@testing-library/jest-dom';
import { describe, vi, afterEach, afterAll, test, expect } from 'vitest';
import { ErrorBoundary } from '../ErrorBoundary';

describe('Error Button Tests', () => {
  const user = userEvent.setup();
  const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});

  afterEach(() => {
    consoleError.mockClear();
  });

  afterAll(() => {
    consoleError.mockRestore();
  });

  test('Throws error when test button is clicked', async () => {
    render(
      <ErrorBoundary>
        <ErrorButton />
      </ErrorBoundary>
    );

    const buttonErrorBoundary = screen.getByTestId('error-boundary');

    await user.click(buttonErrorBoundary);

    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
    expect(consoleError).toHaveBeenCalled();
  });
});
