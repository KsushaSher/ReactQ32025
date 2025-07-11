export interface SearchItems {
  message: string;
  result: Result[];
}

export interface Result {
  properties: ResultProperties;
  _id: string;
  description: string;
  uid: number;
  __v: number;
}

export interface ResultProperties {
  created: string;
  edited: string;
  name: string;
  gender: string;
  skin_color: string;
  hair_color: string;
  height: number;
  eye_color: string;
  mass: number;
  homeworld: string;
  birth_year: string;
  url: string;
}
