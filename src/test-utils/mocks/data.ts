import { vi } from 'vitest';
import type { Item } from '../../models';
import type { SerializedError } from '@reduxjs/toolkit';

export const mockOnSubmit = vi.fn();

export const BrokenComponent = () => {
  throw new Error('Error!');
};

export const mockError: SerializedError = {
  name: 'Error',
  message: 'Something went wrong',
};
export const mockItems: Item[] = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    url: 'https://rickandmortyapi.com/api/character/1',
  },
  {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    url: 'https://rickandmortyapi.com/api/character/2',
  },
];

export const mockItem: Item = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  gender: 'Male',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  url: 'https://rickandmortyapi.com/api/character/1',
};
