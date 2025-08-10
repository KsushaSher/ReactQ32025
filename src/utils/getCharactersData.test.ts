import {
  getCharacterMock,
  getEmptyCharacterMock,
  mockItem,
} from '../test-utils/mocks/data';
import { getCharactersData } from './getCharactersData';
import { describe, it, expect } from 'vitest';

describe('getCharactersData', () => {
  it('returns data for each id', async () => {
    const ids = ['1', '2'];
    const result = await getCharactersData(ids, getCharacterMock);

    expect(getCharacterMock).toHaveBeenCalledTimes(2);
    expect(getCharacterMock).toHaveBeenNthCalledWith(1, '1');
    expect(getCharacterMock).toHaveBeenNthCalledWith(2, '2');

    expect(result).toEqual([mockItem, mockItem]);
  });

  it('substitutes default values if data is missing', async () => {
    const ids = ['1'];
    const result = await getCharactersData(ids, getEmptyCharacterMock);

    expect(result).toEqual([
      {
        id: 1,
        name: '',
        species: '',
        status: '',
        gender: '',
        image: '',
        url: '',
      },
    ]);
  });
});
