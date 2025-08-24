import { describe, it, expect, beforeEach } from 'vitest';
import ControlledForm from './ControlledForm';
import { screen } from '@testing-library/react';
import { renderWithStore } from '../../test-utils/mocks/data';
import userEvent from '@testing-library/user-event';

describe('CardDetail Component', () => {
  it('renders form with all required fields', () => {
    renderWithStore(<ControlledForm />, ['controlledForm']);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/age/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/female/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/upload picture/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/country/i)).toBeInTheDocument();
  });
});

describe('Field validation', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
    renderWithStore(<ControlledForm />, ['/controlledForm']);
  });

  it('should name must start with uppercase letter', async () => {
    const nameInput = screen.getByLabelText(/name/i);

    await user.type(nameInput, 'john');
    await user.tab();

    expect(
      await screen.findByText(/Name must start with an uppercase letter/i)
    ).toBeInTheDocument();
  });

  it('should age must be a non-negative number', async () => {
    const ageInput = screen.getByLabelText(/age/i);

    await user.type(ageInput, '-5');
    await user.tab();

    expect(
      await screen.findByText(/Age must be a positive number/i)
    ).toBeInTheDocument();
  });

  it('should email format', async () => {
    const emailInput = screen.getByLabelText(/email/i);

    await user.type(emailInput, 'email');
    await user.tab();

    expect(
      await screen.findByText(/Invalid email format/i)
    ).toBeInTheDocument();
  });

  it('the password meets the requirements and matches confirm password', async () => {
    const passwordInput = screen.getByTestId('password');
    const confirmInput = screen.getByLabelText(/confirm password/i);

    await user.type(passwordInput, 'abc');
    await user.tab();
    expect(
      await screen.findByText(
        /Password must contain at least 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character/i
      )
    ).toBeInTheDocument();

    await user.type(passwordInput, '{selectall}{backspace}');
    await user.type(passwordInput, 'Ab1!');
    await user.type(confirmInput, 'Ab2!');
    await user.tab();

    expect(
      await screen.findByText(/Passwords do not match/i)
    ).toBeInTheDocument();
  });
});
