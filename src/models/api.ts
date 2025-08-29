export type ResponseData = Record<string, Country>;

export interface Country {
  data: CountryData[];
  iso_code: string;
}
export interface CountryData {
  cement_co2: number;
  cement_co2_per_capita?: number;
  cumulative_cement_co2?: number;
  population?: number;
  year: number;
  methane?: number;
  oil_co2?: number;
  temperature_change_from_co2?: number;
  nitrous_oxide?: number;
  total_ghg?: number;
}
