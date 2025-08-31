import type { ResponseData } from '../../models/api';
import { fetchData } from '../../services/fetch-data';

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
