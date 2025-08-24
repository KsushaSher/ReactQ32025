import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { FormValues } from '../../models';
import { COUNTRIES } from '../../shared/constants';
export interface FormState {
  countries: string[];
  uncontrolledData: FormValues[];
  controlledData: FormValues[];
}

const initialState: FormState = {
  countries: COUNTRIES,
  uncontrolledData: [],
  controlledData: [],
};

const formSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    setUncontrolledDataItem(state, action: PayloadAction<FormValues>) {
      state.uncontrolledData.push(action.payload);
    },
    setControlledDataItem(state, action: PayloadAction<FormValues>) {
      state.controlledData.push(action.payload);
    },
  },
});

export const { setUncontrolledDataItem, setControlledDataItem } =
  formSlice.actions;

export default formSlice.reducer;
