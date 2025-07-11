export interface AllItems {
  message: string;
  total_records: number;
  total_pages: number;
  previous: string;
  next: string;
  results: ResultsProperties[];
}

export interface ResultsProperties {
  uid: number;
  name: string;
  url: string;
}
