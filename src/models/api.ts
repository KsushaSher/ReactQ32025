export type ResponseData = Record<string, Country>;

export interface Country {
  data: CountryData[];
  iso_code: string;
}
export interface CountryData {
  cement_co2: number;
  cement_co2_per_capita?: number;
  cumulative_cement_co2: number;
  population?: number;
  year: number;
}
