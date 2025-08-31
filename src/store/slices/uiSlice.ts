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
  selectedYear: string;
  searchQuery: string;
  sortOption: string;
}

const initialState: InitialState = {
  selectedColumns: [
    'year',
    'population',
    'cement_co2',
    'cement_co2_per_capita',
  ],
  selectedYear: '',
  searchQuery: '',
  sortOption: 'asc',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setSelectedColumns(state, action: PayloadAction<AdditionalColumns[]>) {
      state.selectedColumns = action.payload;
    },
    setSelectedYear(state, action: PayloadAction<string>) {
      state.selectedYear = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setSortOption(state, action: PayloadAction<string>) {
      state.sortOption = action.payload;
    },
  },
});

export const {
  setSelectedColumns,
  setSelectedYear,
  setSearchQuery,
  setSortOption,
} = uiSlice.actions;

export default uiSlice.reducer;
