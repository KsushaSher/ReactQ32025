import { describe, it, expect } from 'vitest';
import { COUNTRIES } from '../../shared/constants';
import {
  selectCountries,
  selectUncontrolledData,
  selectControlledData,
} from './forms.selectors';
import { mockFormValue } from '../../test-utils/mocks/data';

describe('formsSlice selectors', () => {
  const state = {
    forms: {
      countries: COUNTRIES,
      uncontrolledData: [mockFormValue],
      controlledData: [mockFormValue],
    },
  };

  it('selectCountries should return countries', () => {
    expect(selectCountries(state)).toEqual(COUNTRIES);
  });

  it('selectUncontrolledData should return uncontrolledData', () => {
    expect(selectUncontrolledData(state)).toEqual([mockFormValue]);
  });

  it('selectControlledData should return controlledData', () => {
    expect(selectControlledData(state)).toEqual([mockFormValue]);
  });
});
