import { configureStore } from '@reduxjs/toolkit';
import formsReducer from '../../store/slices/formsSlice';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

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
  initialEntries = ['/']
) {
  return render(
    <Provider store={mockStore}>
      <div id="modal" />
      <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
    </Provider>
  );
}
