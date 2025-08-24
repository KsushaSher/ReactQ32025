import type { FormDataObject } from '../models/form';

export const convertFormToObject = (formData: FormData) => {
  const obj: FormDataObject = {};

  formData.forEach((value, key) => {
    obj[key] = value;
  });

  return obj;
};
