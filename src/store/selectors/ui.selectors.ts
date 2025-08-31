import type { RootState } from '../store';
import { createSelector } from 'reselect';

export const selectUi = (state: RootState) => state.ui;

export const selectColumns = createSelector(
  selectUi,
  (ui) => ui.selectedColumns
);

export const selectYear = createSelector(selectUi, (ui) => ui.selectedYear);

export const selectSearchQuery = createSelector(
  selectUi,
  (ui) => ui.searchQuery
);

export const selectSortOption = createSelector(selectUi, (ui) => ui.sortOption);
