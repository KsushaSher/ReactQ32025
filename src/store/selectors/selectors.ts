import type { RootState } from '../store';

export const getIsSelected = (state: RootState, id: string) =>
  state.characters.selected.includes(id);

export const getCount = (state: RootState) => state.characters.selected.length;
export const getArraySelectedId = (state: RootState) =>
  state.characters.selected;
