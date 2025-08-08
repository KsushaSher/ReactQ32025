import type { RootState } from '../store';
import { createSelector } from 'reselect';

const selectCharacters = (state: RootState) => state.characters;

export const selectSelectedCharacters = createSelector(
  selectCharacters,
  (characters) => characters.selected
);

export const selectCount = createSelector(
  selectCharacters,
  (characters) => characters.selected.length
);

export const selectIsSelected = createSelector(
  selectCharacters,
  (_: RootState, id: string) => id,
  (characters, id) => characters.selected.includes(id)
);
