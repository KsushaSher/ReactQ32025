import formReducer, {
  setControlledDataItem,
  setUncontrolledDataItem,
  type FormState,
} from '../slices/formsSlice';
import { COUNTRIES } from '../../shared/constants';
import { mockFormValue } from '../../test-utils/mocks/data';
import { beforeEach, describe, expect, it } from 'vitest';

describe('formSlice reducer', () => {
  let initialState: FormState;

  beforeEach(() => {
    initialState = {
      countries: COUNTRIES,
      uncontrolledData: [],
      controlledData: [],
    };
  });

  it('should return the initial state when passed an empty action', () => {
    const nextState = formReducer(undefined, { type: '' });

    expect(nextState).toEqual(initialState);
  });

  it('should handle setUncontrolledDataItem', () => {
    const nextState = formReducer(
      initialState,
      setUncontrolledDataItem(mockFormValue)
    );

    expect(nextState.uncontrolledData).toEqual([mockFormValue]);
    expect(nextState.controlledData).toEqual([]);
    expect(nextState.countries).toEqual(COUNTRIES);
  });

  it('should handle setControlledDataItem', () => {
    const nextState = formReducer(
      initialState,
      setControlledDataItem(mockFormValue)
    );

    expect(nextState.controlledData).toEqual([mockFormValue]);
    expect(nextState.uncontrolledData).toEqual([]);
    expect(nextState.countries).toEqual(COUNTRIES);
  });

  it('should handle multiple actions correctly', () => {
    let state = formReducer(
      initialState,
      setUncontrolledDataItem(mockFormValue)
    );

    state = formReducer(state, setControlledDataItem(mockFormValue));

    expect(state.uncontrolledData).toEqual([mockFormValue]);
    expect(state.controlledData).toEqual([mockFormValue]);
    expect(state.countries).toEqual(COUNTRIES);
  });
});
