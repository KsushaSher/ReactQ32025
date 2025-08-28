import { fetchData } from '../../services/fetch-data';

export type ResponseData = Record<string, Country>;

interface Country {
  data: CountryData[];
  iso_code: string;
}
interface CountryData {
  cement_co2: number;
  cement_co2_per_capita?: number;
  cumulative_cement_co2: number;
  population?: number;
  year: number;
}

const getCO2Data = () => {
  let status = 'pending';
  let result: ResponseData;

  const suspender = fetchData().then(
    (data) => {
      status = 'success';
      result = data;
    },
    (error) => {
      status = 'error';
      result = error;
    }
  );

  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    },
  };
};

export default getCO2Data;
