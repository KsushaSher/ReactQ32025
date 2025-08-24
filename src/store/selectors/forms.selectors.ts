import type { RootState } from '../store';
import { createSelector } from 'reselect';

const selectForms = (state: RootState) => state.forms;

export const selectCountries = createSelector(
  selectForms,
  (forms) => forms.countries
);

export const selectUncontrolledData = createSelector(
  selectForms,
  (forms) => forms.uncontrolledData
);

export const selectControlledData = createSelector(
  selectForms,
  (forms) => forms.controlledData
);
