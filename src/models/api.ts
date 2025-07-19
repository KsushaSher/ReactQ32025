export interface Response {
  info: Info;
  results: Item[];
}

export interface Info {
  count: number;
  next: null | number;
  pages: number;
  prev: null | number;
}

export interface Item {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  url: string;
}
