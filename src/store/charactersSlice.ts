import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface CharactersState {
  selected: string[];
}

export const initialState: CharactersState = {
  selected: [],
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setSelected(state, action: PayloadAction<string>) {
      const id = action.payload;

      if (state.selected.includes(id)) {
        state.selected = state.selected.filter((item) => item !== id);
      } else {
        state.selected.push(id);
      }
    },
    reset() {
      return initialState;
    },
  },
});

export const { setSelected, reset } = charactersSlice.actions;
export default charactersSlice.reducer;
