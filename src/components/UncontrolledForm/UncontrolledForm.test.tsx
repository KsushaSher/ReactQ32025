import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithStore } from '../../test-utils/mocks/data';
import UncontrolledForm from './UncontrolledForm';

describe('CardDetail Component', () => {
  it('renders form with all required fields', () => {
    renderWithStore(<UncontrolledForm />, ['controlledForm']);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/age/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/female/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/upload picture/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/country/i)).toBeInTheDocument();
  });
});
