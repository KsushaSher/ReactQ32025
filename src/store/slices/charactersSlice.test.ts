import { expect, it } from 'vitest';
import reducer, {
  resetSelectedСharacter,
  toggleSelectedСharacter,
} from './charactersSlice';

it('toggleSelectedСharacter adds a new id', () => {
  const state = { selected: [] };
  const action = toggleSelectedСharacter('1');
  const newState = reducer(state, action);

  expect(newState.selected).toEqual(['1']);
});

it('toggleSelectedСharacter removes an existing id', () => {
  const state = { selected: ['1', '2'] };
  const action = toggleSelectedСharacter('1');
  const newState = reducer(state, action);

  expect(newState.selected).toEqual(['2']);
});

it('resetSelectedСharacter clears the selected array', () => {
  const state = { selected: ['1', '2'] };
  const newState = reducer(state, resetSelectedСharacter());

  expect(newState.selected).toEqual([]);
});
