import type { RootState } from '../store';
import { createSelector } from 'reselect';

export const selectUi = (state: RootState) => state.ui;

export const selectColumns = createSelector(
  selectUi,
  (ui) => ui.selectedColumns
);
