import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ButtonError from './ButtonError';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import '@testing-library/jest-dom';
import { describe, vi, afterEach, afterAll, test, expect } from 'vitest';

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
        <ButtonError />
      </ErrorBoundary>
    );

    const buttonErrorBoundary = screen.getByTestId('error-boundary');

    await user.click(buttonErrorBoundary);

    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
    expect(consoleError).toHaveBeenCalled();
  });
});
