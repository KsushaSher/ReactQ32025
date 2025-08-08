import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface InitialState {
  selected: string[];
}

export const initialState: InitialState = {
  selected: [],
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    toggleSelectedСharacter(state, action: PayloadAction<string>) {
      const id = action.payload;

      if (state.selected.includes(id)) {
        state.selected = state.selected.filter((item) => item !== id);
      } else {
        state.selected.push(id);
      }
    },
    resetSelectedСharacter(state) {
      state.selected = [];
    },
  },
});

export const { toggleSelectedСharacter, resetSelectedСharacter } =
  charactersSlice.actions;
export default charactersSlice.reducer;
