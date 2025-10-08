export interface CharactersApiResponse {
  info: PaginationInfo;
  results: CharacterItem[];
}

export interface PaginationInfo {
  count: number;
  next: null | number;
  pages: number;
  prev: null | number;
}

export interface CharacterItem {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  url: string;
}
