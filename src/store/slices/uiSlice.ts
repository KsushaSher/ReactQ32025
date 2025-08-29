import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type AdditionalColumns =
  | 'year'
  | 'population'
  | 'cement_co2'
  | 'cement_co2_per_capita'
  | 'methane'
  | 'oil_co2'
  | 'temperature_change_from_co2'
  | 'nitrous_oxide'
  | 'total_ghg';

interface InitialState {
  selectedColumns: AdditionalColumns[];
}

const initialState: InitialState = {
  selectedColumns: [
    'year',
    'population',
    'cement_co2',
    'cement_co2_per_capita',
  ],
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setSelectedColumns(state, action: PayloadAction<AdditionalColumns[]>) {
      state.selectedColumns = action.payload;
    },
  },
});

export const { setSelectedColumns } = uiSlice.actions;

export default uiSlice.reducer;
