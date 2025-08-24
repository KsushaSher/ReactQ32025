import { createSlice } from '@reduxjs/toolkit';
import type { FormValues } from '../../models';
import { COUNTRIES } from '../../shared/constants';

interface FormState {
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
  reducers: {},
});

export default formSlice.reducer;
