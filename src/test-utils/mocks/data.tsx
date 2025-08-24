import { configureStore } from '@reduxjs/toolkit';
import formsReducer from '../../store/slices/formsSlice';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ROUTES } from '../../shared/constants';
import { vi } from 'vitest';
import type { FormValues } from '../../models';

export const mockStore = configureStore({
  reducer: { forms: formsReducer },
  preloadedState: {
    forms: {
      countries: ['USA', 'Canada'],
      uncontrolledData: [],
      controlledData: [],
    },
  },
});

export function renderWithStore(
  children: React.ReactElement,
  initialEntries = [ROUTES.MAIN]
) {
  const modalRoot = document.createElement('div');

  modalRoot.setAttribute('id', 'modal');
  document.body.appendChild(modalRoot);

  return render(
    <Provider store={mockStore}>
      <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
    </Provider>
  );
}

export const mockOnClose = vi.fn();

export const mockFormValue: FormValues = {
  name: 'John',
  age: 30,
  email: 'tt@tt.tt',
  password: 'Jj1!',
  confirmPassword: 'Jj1!',
  gender: 'male',
  image: 'data:image/png;base64',
  country: 'Belarus',
  acceptTerms: true,
};
